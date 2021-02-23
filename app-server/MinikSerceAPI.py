#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from bs4 import BeautifulSoup as bs
import requests
import json
from flask import Flask
from flask_cors import CORS
from flask import jsonify
from threading import Thread
import sqlite3


# In[ ]:


# url = "https://www.youtube.com/playlist?list=PLEwmXfTz7jDynzZKZzpx8sdKjnWuLQAW3"


# In[ ]:


# from selenium import webdriver
# opts = webdriver.FirefoxOptions()
# opts.headless = False
# browser = webdriver.Firefox(executable_path=r'geckodriver.exe',options=opts)
# browser.get(url)


# In[ ]:


# songs = browser.find_elements_by_tag_name("ytd-playlist-video-renderer")


# In[ ]:


# len(songs)
# song_list = []


# In[ ]:


# conn = sqlite3.connect('playlist.db')
# c = conn.cursor()
# c.execute('CREATE TABLE if not exists songs (id int primary key,song_name varchar(100),singer varchar(50),song_yt_url varchar(20))')
# for song in songs:
#     data = song.find_element_by_tag_name('h3')
#     link = data.find_element_by_tag_name('a').get_attribute('href')
#     title = data.find_element_by_tag_name('a').get_attribute('title')
#     print(title)
#     song = link.split("&")[0].split("=")[1]
#     index = link.split("&")[2].split("=")[1]
#     song_inf = title.split(' - ')
#     if(len(song_inf)<2):
#         temp = song_inf[0]
#         song_inf[0] = "Sezen Aksu"
#         song_inf.append(temp)
#     song_list.append(song)
#     query = "INSERT INTO songs (id,song_name,singer,song_yt_url) VALUES ({},'{}','{}','{}')".format(index,song_inf[1].replace("'"," "),song_inf[0],song)
#     print(query)
#     c.execute(query)
#     conn.commit()


# In[ ]:


def mapToJson(songList):
    songJson = {}
    _list = []
    for song in songList:
        songJsonObject = {}
        songJsonObject['id'] = song[0]
        songJsonObject['song_name'] = song[1]
        songJsonObject['singer'] = song[2]
        songJsonObject['song_yt_url'] = song[3]
        _list.append(songJsonObject)
    songJson["songs"] = _list
    return songJson


# In[ ]:


def start_service():
    app = Flask(__name__)
    
    CORS(app)
    
    @app.route('/songs', methods=['GET'])
    def getAllSongs():
        query = "SELECT * FROM songs"
        conn = sqlite3.connect('playlist.db')
        cur = conn.cursor()
        cur.execute(query)
        return jsonify(mapToJson(cur.fetchall()))
    
    @app.route('/songs/<int:page>', methods=['GET'])
    def getSongsByPage(page):
        limit = 6
        offset = (page-1)*limit
        query = "SELECT * FROM songs limit {} offset {}".format(limit,offset)
        conn = sqlite3.connect('playlist.db')
        cur = conn.cursor()
        cur.execute(query)
        return jsonify(mapToJson(cur.fetchall()))
    
    @app.route('/song/<songName>', methods=['GET'])
    def getSongByName(songName):
        query = "SELECT * FROM songs WHERE song_name like '%{}%'".format(songName)
        conn = sqlite3.connect('playlist.db')
        cur = conn.cursor()
        cur.execute(query)
        return jsonify(mapToJson(cur.fetchall()))
    
    app.run(host='0.0.0.0', port=5000)


# In[ ]:


start_service()


# In[ ]:


song_list


# In[ ]:


for song in songs:
    data = song.find_element_by_tag_name('h3')
    link = data.find_element_by_tag_name('a').get_attribute('href')
    title = data.find_element_by_tag_name('a').get_attribute('title')
    print(title)
    song = link.split("&")[0].split("=")[1]
    index = link.split("&")[2].split("=")[1]
    song_list.append(song)
    query = "INSERT TABLE songs (id,song_name,singer,song_yt_url) VALUES ({},'{}','{}','{}')".format(index,title.split(' - ')[1],title.split(' - ')[0],song)
    print(query)
    break


# In[ ]:


conn.close()


# In[ ]:





# In[ ]:




