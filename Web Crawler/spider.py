import requests
import re
from bs4 import BeautifulSoup

def trade_spider():
    news={}
    #google search
    url='https://www.google.com/search?q=covid-19+updates&client=ubuntu&channel=fs&sxsrf=ALeKk03qx1tqXgVFizA69E5zFR0krg8VZw:1602284608955&source=lnms&tbm=nws&sa=X&ved=2ahUKEwj1ksinz6jsAhUwxTgGHSrSB9YQ_AUoAXoECCYQAw&biw=1853&bih=926'
    source_code=requests.get(url)
    plain_text=source_code.text
    soup = BeautifulSoup(plain_text)
    for link in soup.findAll('a'):
        if link.findAll('div',class_="BNeawe vvjwJb AP7Wnd"):
            href='https://www.google.com'+str(link.get('href'))
            news[link.findAll('div',class_="BNeawe vvjwJb AP7Wnd")[0].string]=href
            print(link.findAll('div',class_="BNeawe vvjwJb AP7Wnd")[0].string)
            print(href)

    #bing search
    url='https://www.bing.com/news/search?q=covid19+news+update&FORM=HDRSC6'
    source_code=requests.get(url)
    plain_text=source_code.text
    soup = BeautifulSoup(plain_text)
    for link in soup.findAll('a',class_='title'):
        href=link.get('href')
        news[link.string]=href
        print(link.string)
        print(href)

    #yahoo search
    url='https://in.news.search.yahoo.com/search;_ylt=AwrwSYxw.oBfX1gAtQW7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=covid+19+news+updates&fr2=piv-web&fr=sfp'
    source_code=requests.get(url)
    plain_text=source_code.text
    soup = BeautifulSoup(plain_text) 
    for link in soup.findAll('a'):
        title=""
        href=link.get('href')
        if link.findAll('b') and href is not '#':
            for head in link.contents:
                if isinstance(head, str):
                    title=title+head
                else:
                    title+=head.string
            print(title)
            print(href)
            news[title]=href
    print("\n")
    print(news)

