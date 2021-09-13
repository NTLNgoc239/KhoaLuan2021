import uvicorn
from typing import Optional
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from psycopg2.extras import RealDictCursor
import psycopg2
import json
import requests
from datetime import datetime


connection = psycopg2.connect(user="postgres",
                              password="R-tek+&3^5)1(",
                              host="localhost",
                              port="5432",
                              database="testdb")
# connection = psycopg2.connect(user="postgres",
#                               password="vlab5.0",
#                               host="localhost",
#                               port="5432",
#                               database="test2")

cur = connection.cursor(cursor_factory=RealDictCursor)

# uvicorn main:app --host 0.0.0.0 --port 8000 --reload
# uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4 --loop asyncio --reload

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get-bound")
async def read_item():
    query_sql = f"""
    SELECT jsonb_build_object(
    'type',     'FeatureCollection',
    'features', jsonb_agg(features.feature)
    )
    FROM (
    SELECT jsonb_build_object(
        'type',       'Feature',
        'id',         gid,
        'geometry',   ST_AsGeoJSON(geom)::jsonb,
        'properties', to_jsonb(inputs) - 'id' - 'geom'
    ) AS feature
    FROM (SELECT * FROM binhthanh) inputs) features;
    """
    cur.execute(query_sql)
    results = cur.fetchall()
    # return results[0]['jsonb_build_object']['features']
    return results[0]['jsonb_build_object']


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


@app.get("/get-point21")
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
    FROM (SELECT * FROM getdata1022 where id::text like '21%') inputs) features;
    """
    cur.execute(query_sql)
    results = cur.fetchall()
    # return results[0]['jsonb_build_object']['features']
    return results[0]['jsonb_build_object']


@app.get("/get-pointnow")
async def read_item():
    query_sql = f"""
    SELECT jsonb_build_object(
    'type',     'FeatureCollection',
    'features', jsonb_agg(features.feature)
    )
    FROM (
    SELECT jsonb_build_object(
        'type',       'Feature',
        'id',         gid,
        'geometry',   ST_AsGeoJSON(geom)::jsonb,
        'properties', to_jsonb(inputs) - 'id' - 'geom'
    ) AS feature
    FROM (with ngap_hour as (
	select id,(EXTRACT(EPOCH FROM current_timestamp-thoigian_baongap)/3600)as ngap_hours from phananh_ngaplut
)
		select p.id as gid, * from phananh_ngaplut p
		join ngap_hour n on p.id = n.id
		where ngap_hours < 7) inputs) features;
    """
    cur.execute(query_sql)
    results = cur.fetchall()
    # return results[0]['jsonb_build_object']['features']
    return results[0]['jsonb_build_object']


@app.get("/get-pointold")
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
    FROM (SELECT * FROM phananh_ngaplut
    where (thoigian_baongap::TIMESTAMP::DATE) =  (CURRENT_TIMESTAMP::TIMESTAMP::DATE - 1)) inputs) features;
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
        'Nghet': results[0]['nghet'],
        'Ngap': results[0]['ngap'],
        'CSHT': results[0]['khac']

        # 'backgroundColor':[
        #     "#FF6384",
        #     "#84FF63",
        #     "#8463FF"]
    }


@app.get("/get-street")
async def read_item():
    query_sql = f"""SELECT gid, name, oneway, shape_leng, ST_AsGEOJSON(geom)::jsonb->'coordinates' as point FROM giaothongbinhthanh;"""
    cur.execute(query_sql)
    results = cur.fetchall()
    return results
    # data = json.loads(results)


@app.get("/get-type/{year}")
async def read_item(year):
    year = year[-2:]
    query_sql = f"""with Jan as
(
select count(id) as thang1 from getdata1022 where  id::text LIKE '{year}01%'),

Feb as
(
select count(id) as thang2  from getdata1022 where  id::text LIKE '{year}02%'
),
Mar as
(
select count(id) as thang3  from getdata1022 where  id::text LIKE '{year}03%'
),
Apr as
(
select count(id) as thang4  from getdata1022 where  id::text LIKE '{year}04%'
),
May as
(
select count(id) as thang5  from getdata1022 where  id::text LIKE '{year}05%'
),
Jun as
(
select count(id) as thang6  from getdata1022 where  id::text LIKE '{year}06%'
),
Jul as
(
select count(id) as thang7   from getdata1022 where  id::text LIKE '{year}07%'
),
Aug as
(
select count(id) as thang8   from getdata1022 where  id::text LIKE '{year}08%'
),
Sep as
(
select count(id) as thang9  from getdata1022 where  id::text LIKE '{year}09%'
),
Oct as
(
select count(id) as thang10   from getdata1022 where  id::text LIKE '{year}10%'
),
Nov as
(
select count(id) as thang11   from getdata1022 where  id::text LIKE '{year}11%'
),
Dec as
(
select count(id) as thang12   from getdata1022 where  id::text LIKE '{year}12%'
)

select * from Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"""
    cur.execute(query_sql)
    results = cur.fetchall()
    return {
        'Jan': results[0]['thang1'],
        'Feb': results[0]['thang2'],
        'Mar': results[0]['thang3'],
        'Apr': results[0]['thang4'],
        'May': results[0]['thang5'],
        'Jun': results[0]['thang6'],
        'Jul': results[0]['thang7'],
        'Aug': results[0]['thang8'],
        'Sep': results[0]['thang9'],
        'Oct': results[0]['thang10'],
        'Nov': results[0]['thang11'],
        'Dec': results[0]['thang12']
    }


@app.get("/get-district/{year}")
async def read_item(year):
    year = year[-2:]
    query_sql = f"""with Q1 as
(
select count(id) as Q1 from getdata1022 where address like '%Quận 1%' and id::text LIKE '{year}%'),

Q2 as
(
select count(id) as Q2  from getdata1022 where address like '%Quận 2%' and  id::text LIKE '{year}%'
),
Q3 as
(
select count(id) as Q3  from getdata1022 where address like '%Quận 3%' and  id::text LIKE '{year}%'
),
Q4 as
(
select count(id) as Q4  from getdata1022 where address like '%Quận 4%' and  id::text LIKE '{year}%'
),
Q5 as
(
select count(id) as Q5  from getdata1022 where address like '%Quận 5%' and  id::text LIKE '{year}%'
),
Q6 as
(
select count(id) as Q6  from getdata1022 where address like '%Quận 6%' and  id::text LIKE '{year}%'
),
Q7 as
(
select count(id) as Q7  from getdata1022 where address like '%Quận 7%' and  id::text LIKE '{year}%'
),
Q8 as
(
select count(id) as Q8  from getdata1022 where address like '%Quận 8%' and  id::text LIKE '{year}%'
),
Q9 as
(
select count(id) as Q9  from getdata1022 where address like '%Quận 9%' and  id::text LIKE '{year}%'
),
Q10 as
(
select count(id) as Q10  from getdata1022 where address like '%Quận 10%' and  id::text LIKE '{year}%'
),
Q11 as
(
select count(id) as Q11  from getdata1022 where address like '%Quận 11%' and  id::text LIKE '{year}%'
),
Q12 as
(
select count(id) as Q12  from getdata1022 where address like '%Quận 12%' and  id::text LIKE '{year}%'
),
HBC as
(
select count(id) as BC  from getdata1022 where address like '%Bình Chánh%' and  id::text LIKE '{year}%'
),
HCC as
(
select count(id) as HCC  from getdata1022 where address like '%Củ Chi%' and  id::text LIKE '{year}%'
),
CG as
(
select count(id) as CG from getdata1022 where address like '%Cần Giờ%' and  id::text LIKE '{year}%'
),
HM as
(
select count(id) as HM  from getdata1022 where address like '%Hóc Môn%' and  id::text LIKE '{year}%'
),
TD as
(
select count(id) as TD  from getdata1022 where address like '%Thủ Đức%' and  id::text LIKE '{year}%'
),
BT as
(
select count(id) as BT  from getdata1022 where address like '%Bình Thạnh%' and  id::text LIKE '{year}%'
),
TB as
(
select count(id) as TB  from getdata1022 where address like '%Tân Bình%' and  id::text LIKE '{year}%'
),
TP as
(
select count(id) as TP  from getdata1022 where address like '%Tân Phú%' and  id::text LIKE '{year}%'
),
BTan as
(
select count(id) as BTan  from getdata1022 where address like '%Bình Tân%' and  id::text LIKE '{year}%'
),
NB as
(
select count(id) as NB  from getdata1022 where address like '%Nhà Bè%' and  id::text LIKE '{year}%'
),
GV as
(
select count(id) as GV  from getdata1022 where address like '%Gò Vấp%' and  id::text LIKE '{year}%'
),
PN as
(
select count(id) as PN  from getdata1022 where address like '%Phú Nhuận%' and  id::text LIKE '{year}%'
)
select * from Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,HCC,HBC,CG,HM,NB,BT,BTan,TP,TB,PN,TD,GV"""
    cur.execute(query_sql)
    results = cur.fetchall()
    return {
        'Quan1': results[0]['q1'],
        'Quan2': results[0]['q2'],
        'Quan3': results[0]['q3'],
        'Quan4': results[0]['q4'],
        'Quan5': results[0]['q5'],
        'Quan6': results[0]['q6'],
        'Quan7': results[0]['q7'],
        'Quan8': results[0]['q8'],
        'Quan9': results[0]['q9'],
        'Quan10': results[0]['q10'],
        'Quan11': results[0]['q11'],
        'Quan12': results[0]['q12'],
        'BChanh': results[0]['bc'],
        'CuChi': results[0]['hcc'],
        'CanGio': results[0]['cg'],
        'HMon': results[0]['hm'],
        'TDuc': results[0]['td'],
        'BThanh': results[0]['bt'],
        'TBinh': results[0]['tb'],
        'TPhu': results[0]['tp'],
        'BTan': results[0]['btan'],
        'NBe': results[0]['nb'],
        'GVap': results[0]['gv'],
        'PNhuan': results[0]['pn'],

    }


@app.get("/place/autocomplete")
async def read_item(input: str):
    r = requests.get(
        'https://rsapi.goong.io/Place/AutoComplete',
        params={
            'api_key': '8XuGX82jnqpmR1fZFYlJd75xRAfrPPn5GKzIQutJ',
            'input': input,
            'location': '10.817869, 106.651352'
        },
        headers={
            'Origin': 'https://inspector.goong.io',
            'Referer': 'https://inspector.goong.io/'
        }
    )
    # placeid = []
    # desc = []
    # for i in r.json()['predictions']:
    #     placeid.append(i['place_id'])
    #     desc.append(i['description'])
    # return {'placeid':placeid,'description':desc}
    return r.json()


@app.get("/place/detail")
async def read_item(placeid: str):
    r = requests.get(
        'https://rsapi.goong.io/Place/Detail',
        params={
            'api_key': '8XuGX82jnqpmR1fZFYlJd75xRAfrPPn5GKzIQutJ',
            'place_id': placeid
        },
        headers={
            'Origin': 'https://inspector.goong.io',
            'Referer': 'https://inspector.goong.io/'
        }
    )
    # return r.json()['result']['geometry']['location']
    return r.json()


@app.post("/direction")
# async def read_item(lng1 = Form(...), lat1 = Form(...), lng2 = Form(...), lat2 = Form(...),):
async def read_item(start=Form(...), end=Form(...)):
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
        'SELECT gid AS id, source, target, length AS cost, rcost as reverse_cost FROM giaothongbinhthanh
join (select st_union(st_buffer(getdata1022.geom::geography,10)::geometry) as geom from getdata1022
		  join binhthanh on st_contains(binhthanh.geom,getdata1022.geom)
where id > 210100000000 
		  ) as a on NOT st_intersects(a.geom,giaothongbinhthanh.geom)', 
    -- source node 
        (SELECT id FROM giaothongbinhthanh_vertices_pgr
order by st_distance(st_geomfromtext('POINT({start})',4326)::geography,the_geom::geography) limit 1), 
    -- target node                                                                                    
        (SELECT id FROM giaothongbinhthanh_vertices_pgr
order by st_distance(st_geomfromtext('POINT({end})',4326)::geography,the_geom::geography) limit 1), 
       True
    ) as d
    left join giaothongbinhthanh as e on d.edge = e.gid
ORDER BY d.seq
) inputs) features;
    """
    
    try:
        cur.execute(query_sql)
        results = cur.fetchall()
        connection.commit()
        return results[0]['jsonb_build_object']
    except:
        connection.rollback()
    # return results[0]['jsonb_build_object']['features']



@app.post("/feedback")
async def storeFeedback(danhgia: str = Form(...), noidung: str = Form(...)):
    query_sql = f"""insert into feedbacks (danhgia, noidung) values ('{danhgia}', '{noidung}');"""
    cur.execute(query_sql)
    connection.commit()
    return {
        "Đã nhận thành công, cảm ơn bạn!"
    }


@app.post("/directionnormal")
# async def read_item(lng1 = Form(...), lat1 = Form(...), lng2 = Form(...), lat2 = Form(...),):
async def read_item(start=Form(...), end=Form(...)):
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
        'SELECT gid AS id, source, target, length AS cost, rcost as reverse_cost FROM giaothongbinhthanh',
    -- source node 
        (SELECT id FROM giaothongbinhthanh_vertices_pgr
order by st_distance(st_geomfromtext('POINT({start})',4326)::geography,the_geom::geography) limit 1), 
    -- target node                                                                                    
        (SELECT id FROM giaothongbinhthanh_vertices_pgr
order by st_distance(st_geomfromtext('POINT({end})',4326)::geography,the_geom::geography) limit 1), 
       True
    ) as d
    left join giaothongbinhthanh as e on d.edge = e.gid
ORDER BY d.seq
) inputs) features;
    """
    
    try:
        cur.execute(query_sql)
        results = cur.fetchall()
        connection.commit()
        return results[0]['jsonb_build_object']
    except:
        connection.rollback()
    # return results[0]['jsonb_build_object']['features']
    # return results[0]['jsonb_build_object']
if __name__ == "__main__":
    uvicorn.run("main:app", port=5555, host='127.0.0.1', reload=True)
