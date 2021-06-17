from typing import Optional
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from psycopg2.extras import RealDictCursor
import psycopg2
import json,requests

connection = psycopg2.connect(user="postgres",
                              password="123",
                              host="localhost",
                              port="5433",
                              database="postgres")

cur = connection.cursor(cursor_factory=RealDictCursor)

# uvicorn main:app --host 0.0.0.0 --port 8000 --reload

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get-point")
async def read_item():
    query_sql = f"""
    SELECT jsonb_build_object(
    'type',     'FeatureCollection',
    'features', jsonb_agg(features.feature)
    )
    FROM (
    SELECT jsonb_build_object(
        'type',       'Feature',
        'id',         id,
        'geometry',   ST_AsGeoJSON(geom)::jsonb,
        'properties', to_jsonb(inputs) - 'id' - 'geom'
    ) AS feature
    FROM (SELECT * FROM getdata1022) inputs) features;
    """ 
    cur.execute(query_sql)
    results = cur.fetchall()
    # return results[0]['jsonb_build_object']['features']
    return results[0]['jsonb_build_object']

@app.get("/get-thongke/by-year/{year}")
async def read_item(year):
    year = year[-2:]
    query_sql = f"""with nghet as
(
	select count(id) as nghet from getdata1022 where content like '%nghẹt%' and id::text LIKE '{year}%'),

ngap as
(
	select count(id) as ngap from getdata1022 where content like '%ngập%' and id::text LIKE '{year}%'
),

khac as 
(
	select count(id) as khac from getdata1022
	where 
	id::text like '{year}%'
	and id not in (select id from getdata1022 where content like '%ngập%' and id::text LIKE '{year}%')
	and id not in (select id from getdata1022 where content like '%nghẹt%' and id::text LIKE '{year}%')
)

select * from nghet,ngap,khac"""
    cur.execute(query_sql)
    results = cur.fetchall()
    return {
        'nghet': results[0]['nghet'],
        'ngap': results[0]['ngap'],
        'khac': results[0]['khac']

        # 'backgroundColor':[
        #     "#FF6384",
        #     "#84FF63",
        #     "#8463FF"]
    }


@app.get("/get-street")
async def read_item():
    query_sql = f"""SELECT gid, name, oneway, shape_leng, ST_AsGEOJSON(geom)::jsonb->'coordinates' as point FROM gtbt_pg;"""
    cur.execute(query_sql)
    results = cur.fetchall()
    return results
    # data = json.loads(results)

@app.post("/direction")
# async def read_item(lng1 = Form(...), lat1 = Form(...), lng2 = Form(...), lat2 = Form(...),):
async def read_item(start = Form(...), end = Form(...)):
    query_sql = f"""
    SELECT jsonb_build_object(
    'type',     'FeatureCollection',
    'features', jsonb_agg(features.feature)
    )
    FROM (
    SELECT jsonb_build_object(
        'type',       'Feature',
        'id',         seq,
        'geometry',   ST_AsGeoJSON(edge_geom)::jsonb,
        'properties', to_jsonb(inputs) - 'node' - 'seq' - 'edge' - 'edge_geom'
    ) AS feature
    FROM (SELECT  
   distinct d.node, d.seq, d.edge, d.cost, e.geom AS edge_geom
FROM  
    pgr_dijkstra(
    -- edges
        'SELECT gid AS id, source, target, length AS cost FROM gtbt_pg
join (select st_union(st_buffer(getdata1022.geom::geography,20)::geometry) as geom from getdata1022
		  join binhthanh on st_contains(binhthanh.geom,getdata1022.geom)
where id > 210100000000 
		  ) as a on NOT st_intersects(a.geom,gtbt_pg.geom)', 
    -- source node 
        (SELECT id FROM gtbt_pg_vertices_pgr
order by st_distance(st_geomfromtext('POINT({start})',4326)::geography,the_geom::geography) limit 1), 
    -- target node                                                                                    
        (SELECT id FROM gtbt_pg_vertices_pgr
order by st_distance(st_geomfromtext('POINT({end})',4326)::geography,the_geom::geography) limit 1), 
       True
    ) as d
    left join gtbt_pg as e on d.edge = e.gid
ORDER BY d.seq
) inputs) features;
    """ 
    cur.execute(query_sql)
    results = cur.fetchall()
    # return results[0]['jsonb_build_object']['features']
    return results[0]['jsonb_build_object']

@app.get("/autocomplete")
async def read_item(input:str):
    r = requests.get(
        'https://rsapi.goong.io/Place/AutoComplete',
        params={
            'api_key': 'PxNaGKg1NIWUJsFT3DMBkqaDspx5VvdW9CePVHq1',
            'input': input,
            'location': '10.817869, 106.651352'
        },
        headers={
            'Origin': 'https://inspector.goong.io',
            'Referer': 'https://inspector.goong.io/'
        }
    )
    placeid = []
    desc = []
    for i in r.json()['predictions']:
        placeid.append(i['place_id'])
        desc.append(i['description'])
    return {'placeid':placeid,'description':desc}

@app.get("/place")
async def read_item(input:str):
    r = requests.get(
        'https://rsapi.goong.io/Place/Detail',
        params={
            'api_key': 'PxNaGKg1NIWUJsFT3DMBkqaDspx5VvdW9CePVHq1',
            'place_id': input
        },
        headers={
            'Origin': 'https://inspector.goong.io',
            'Referer': 'https://inspector.goong.io/'
        }
    )
    return r.json()['result']['geometry']['location']