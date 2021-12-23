var color1 = d3.scaleOrdinal(["#f9a825", '#c0c015',"#37474f",'#1565c0', '#4527a0']);

const graph = {
  "nodes": [
  {'id':1,'name': 'First','group': 1,'value': 7072,'reposted': "<p><b>Кого репостил канал:</b></p><p><p>Резидент: 137</p><p>Наблюдатель: 114</p><p>Легитимный: 81</p><p>Картель: 34</p><p>ЗеРада: 29</p>"},
{'id':2,'name': 'Криоген','group': 1,'value': 186,'reposted': "<p><b>Кого репостил канал:</b></p><p><p>First: 197</p><p>Резидент: 56</p><p>Наблюдатель: 24</p><p>Резидент: 18</p><p>First: 8</p>"},
{'id':3,'name': 'Скептик','group': 1,'value': 34,'reposted': "<p><b>Кого репостил канал:</b></p><p><p>First: 544</p><p>Резидент: 158</p><p>Наблюдатель: 61</p><p>Легитимный: 48</p><p>Резидент: 34</p>"},
{'id':4,'name': 'Наблюдатель','group': 1,'value': 2559,'reposted': "<p><b>Кого репостил канал:</b></p><p><p>Резидент: 294</p><p>Klymenko Time: 289</p><p>First: 174</p><p>Шептун: 121</p><p>UKRMedia: 87</p>"},
{'id':5,'name': 'MediaKiller','group': 1,'value': 460,'reposted': "<p><b>Кого репостил канал:</b></p><p><p>Резидент: 20</p><p>Резидент: 11</p><p>WASH: 10</p><p>Легитимный: 10</p><p>ЗеРада: 8</p>"},
{'id':6,'name': 'WASH','group': 1,'value': 1551,'reposted': "<p><b>Кого репостил канал:</b></p><p><p>Резидент: 94</p><p>Легитимный: 53</p><p>Секретов.НЕТ: 36</p><p>nan: 31</p><p>Шептун: 26</p>"},
/* {'id':7,'name': '🏴‍☠️Бунтарь','group': 1,'value': 533,'reposted': "<p><b>Кто репостил:</b></p><p><p>⚖️Справедливость: 10</p><p>цибуля: 5</p><p>Мега Зрада: 5</p><p>Сочные новости от скуки🍅: 4</p><p>⚖️Справедливость: 4</p>"}, */
{'id':8,'name': 'Резидент','group': 3,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 294</p>Скептик: 158</p>First: 137</p>WASH: 94</p>"},
{'id':9,'name': 'Киевский Кейс','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 20</p>First: 19</p>"},
{'id':10,'name': 'Легитимный','group': 3,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>First: 81</p>Наблюдатель: 65</p>WASH: 53</p>Скептик: 48</p>Наблюдатель: 38</p>"},
{'id':11,'name': 'ЗеРада','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 72</p>Наблюдатель: 34</p>First: 29</p>WASH: 23</p>Скептик: 13</p>"},
{'id':12,'name': 'Киев Власть','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 12</p>First: 10</p>Скептик: 3</p>Криоген: 2</p>"},
{'id':13,'name': 'Сплетница','group': 3,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 37</p>Наблюдатель: 23</p>First: 16</p>Скептик: 13</p>First: 9</p>"},
{'id':14,'name': 'Шептун','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 121</p>Наблюдатель: 53</p>WASH: 26</p>First: 22</p>WASH: 22</p>"},
{'id':15,'name': 'Картель','group': 3,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>First: 34</p>Наблюдатель: 22</p>Наблюдатель: 19</p>First: 7</p>WASH: 5</p>"},
{'id':16,'name': 'Женщина с косой','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>First: 29</p>Наблюдатель: 27</p>Наблюдатель: 15</p>MediaKiller: 5</p>First: 4</p>"},
{'id':17,'name': 'Одесский фраер','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 26</p>Наблюдатель: 14</p>First: 4</p>First: 3</p>Скептик: 3</p>"},
{'id':18,'name': 'Тень на плетень','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 10</p>Наблюдатель: 8</p>First: 6</p>MediaKiller: 4</p>First: 1</p>"},
{'id':19,'name': 'Чёрный Квартал','group': 3,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Скептик: 18</p>Наблюдатель: 14</p>First: 6</p>Наблюдатель: 6</p>Криоген: 5</p>"},
{'id':20,'name': 'Klymenko Time','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 289</p>Наблюдатель: 18</p>WASH: 11</p>WASH: 5</p>First: 4</p>"},
{'id':21,'name': 'Легитимный live','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 23</p>Наблюдатель: 5</p>First: 3</p>First: 1</p>🏴‍☠️Бунтарь: 1</p>"},
{'id':22,'name': 'UKRMedia','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 87</p>"},
{'id':23,'name': 'ЗА ГРАНЬЮ','group': 1,'value': 176,'reposted': "<p><b>Кто репостил:</b></p><p><p>MediaKiller: 2</p><p>Легитимный: 1</p><p>Криоген: 1</p><p>First: 1</p><p>WASH: 1</p>"},
{'id':24,'name': 'наглый','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 16</p>Наблюдатель: 9</p>MediaKiller: 5</p>First: 2</p>Скептик: 2</p>"},
{'id':25,'name': 'Нетипичное Запорожье','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 8</p>Наблюдатель: 4</p>First: 1</p>"},
{'id':26,'name': 'Шарий.net','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 12</p>Наблюдатель: 7</p>First: 2</p>First: 1</p>Скептик: 1</p>"},
{'id':27,'name': 'Анатолий Шарий','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 7</p>First: 2</p>MediaKiller: 2</p>🏴‍☠️Бунтарь: 2</p>"},
{'id':28,'name': 'PavlovskyNews','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 69</p>WASH: 9</p>Наблюдатель: 7</p>WASH: 7</p>First: 1</p>"},
{'id':29,'name': 'Карточный Офис','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 6</p>WASH: 4</p>First: 1</p>Криоген: 1</p>Скептик: 1</p>"},
{'id':30,'name': 'Политика Страны','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 9</p>Наблюдатель: 5</p>Наблюдатель: 4</p>First: 1</p>WASH: 1</p>"},
{'id':32,'name': 'Крокодил','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 28</p>WASH: 6</p>WASH: 6</p>Наблюдатель: 5</p>First: 1</p>"},
{'id':33,'name': 'Макс Бужанский','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 12</p>Наблюдатель: 4</p>MediaKiller: 4</p>MediaKiller: 2</p>WASH: 2</p>"},
{'id':34,'name': 'Dubinsky.pro','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 8</p>Наблюдатель: 4</p>WASH: 3</p>WASH: 2</p>First: 1</p>"},
{'id':35,'name': 'EQUILIBRIUM','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 4</p>Наблюдатель: 3</p>First: 1</p>First: 1</p>"},
{'id':36,'name': 'ГОНЧАРЕНКО','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 3</p>WASH: 1</p>"},
{'id':37,'name': 'ОЛЬГА ШАРИЙ','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 5</p>Наблюдатель: 3</p>First: 1</p>🏴‍☠️Бунтарь: 1</p>"},
{'id':38,'name': 'Вадим Рабинович','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 3</p>First: 1</p>Скептик: 1</p>"},
{'id':39,'name': 'цибуля','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 30</p>🏴‍☠️Бунтарь: 5</p>First: 2</p>Наблюдатель: 2</p>🏴‍☠️Бунтарь: 1</p>"},
{'id':40,'name': 'Зрада чи Перемога','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 27</p>"},
{'id':41,'name': 'Инсайдер UA','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 18</p>First: 2</p>WASH: 2</p>First: 1</p>Скептик: 1</p>"},
{'id':42,'name': 'VESTI','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 17</p>First: 1</p>WASH: 1</p>🏴‍☠️Бунтарь: 1</p>"},
{'id':43,'name': 'XUA','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 15</p>Наблюдатель: 1</p>🏴‍☠️Бунтарь: 1</p>"},
{'id':44,'name': 'Заговорщик','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 11</p>"},
{'id':45,'name': 'Бородатая Бабушка','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 8</p>First: 1</p>"},
{'id':46,'name': 'Союз блогеров Украины','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 6</p>"},
{'id':47,'name': 'Леся из СТРАНЫ','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 5</p>Наблюдатель: 2</p>"},
{'id':48,'name': 'Думай Те | Барометр настроений','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 4</p>"},
{'id':49,'name': 'Ігор Мосійчук 🦏','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 4</p>"},
{'id':50,'name': 'Добкин Михаил','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 4</p>First: 1</p>Наблюдатель: 1</p>"},
{'id':51,'name': 'Ivko.Live','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 3</p>Наблюдатель: 1</p>"},
{'id':52,'name': 'Компромат СНГ','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 3</p>Наблюдатель: 2</p>"},
{'id':53,'name': 'Царьки','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 3</p>Криоген: 1</p>Скептик: 1</p>Наблюдатель: 1</p>"},
{'id':54,'name': 'Андрей Портнов','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>Наблюдатель: 3</p>Наблюдатель: 1</p>"},
{'id':55,'name': 'Політична Арена Вінниччини','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>MediaKiller: 3</p>WASH: 1</p>"},
{'id':56,'name': 'Секретов.НЕТ','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 36</p>WASH: 13</p>"},
{'id':57,'name': 'Разведчик','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 12</p>WASH: 5</p>Наблюдатель: 1</p>"},
{'id':58,'name': 'Тёмный Рыцарь','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 10</p>Наблюдатель: 2</p>Наблюдатель: 2</p>MediaKiller: 2</p>MediaKiller: 1</p>"},
{'id':59,'name': 'Офіс Президента','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 9</p>Наблюдатель: 2</p>"},
{'id':60,'name': 'ТАЙНЫ ДЕПУТАТА','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 7</p>Наблюдатель: 2</p>Наблюдатель: 1</p>"},
{'id':61,'name': 'Danil Getmantsev','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 5</p>First: 1</p>WASH: 1</p>"},
{'id':62,'name': 'Вертикаль','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 5</p>"},
{'id':63,'name': 'ПРАВДА КАЧУРИ','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 4</p>Наблюдатель: 2</p>Наблюдатель: 1</p>"},
{'id':64,'name': '⚖️Справедливость','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>🏴‍☠️Бунтарь: 10</p>WASH: 4</p>🏴‍☠️Бунтарь: 4</p>WASH: 3</p>"},
{'id':65,'name': 'Юлія Гришина','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 3</p>WASH: 1</p>"},
{'id':66,'name': 'Дмитро Разумков_Офіційно','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 3</p>"},
{'id':67,'name': 'Бородатые цитаты','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 3</p>Наблюдатель: 1</p>"},
{'id':68,'name': 'Коридор ОП','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 9</p>WASH: 1</p>"},
{'id':69,'name': 'НАБУ','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 5</p>WASH: 2</p>"},
{'id':70,'name': 'Черная лампа','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 3</p>"},
{'id':71,'name': 'Березовый сок','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>WASH: 3</p>"},
{'id':72,'name': 'Мега Зрада','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>🏴‍☠️Бунтарь: 5</p>WASH: 1</p>"},
{'id':73,'name': 'Рейтинг ПреЗЕдента','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>🏴‍☠️Бунтарь: 3</p>"},
{'id':74,'name': 'Сочные новости от скуки🍅','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>🏴‍☠️Бунтарь: 4</p>🏴‍☠️Бунтарь: 3</p>WASH: 2</p>Наблюдатель: 1</p>Наблюдатель: 1</p>"},
{'id':75,'name': 'УКРАдкой_опросы🇺🇦','group': 2,'value': 1,'reposted': "<p><b>Кто репостил:</b></p><p>🏴‍☠️Бунтарь: 3</p>🏴‍☠️Бунтарь: 2</p>"},
  ],
  "links": [{'source': 1, 'target': 8, 'value': 26},
 {'source': 1, 'target': 9, 'value': 19},
 {'source': 1, 'target': 10, 'value': 17},
 {'source': 1, 'target': 11, 'value': 11},
 {'source': 1, 'target': 4, 'value': 11},
 {'source': 1, 'target': 12, 'value': 10},
 {'source': 1, 'target': 13, 'value': 9},
 {'source': 1, 'target': 14, 'value': 8},
 {'source': 1, 'target': 15, 'value': 7},
 {'source': 1, 'target': 16, 'value': 4},
 {'source': 1, 'target': 17, 'value': 3},
 {'source': 1, 'target': 5, 'value': 3},
 {'source': 1, 'target': 8, 'value': 137},
 {'source': 1, 'target': 4, 'value': 114},
 {'source': 1, 'target': 10, 'value': 81},
 {'source': 1, 'target': 15, 'value': 34},
 {'source': 1, 'target': 11, 'value': 29},
 {'source': 1, 'target': 16, 'value': 29},
 {'source': 1, 'target': 14, 'value': 22},
 {'source': 1, 'target': 13, 'value': 16},
 {'source': 1, 'target': 5, 'value': 12},
 {'source': 1, 'target': 18, 'value': 6},
 {'source': 1, 'target': 19, 'value': 6},
 {'source': 1, 'target': 17, 'value': 4},
 {'source': 1, 'target': 20, 'value': 4},
 {'source': 1, 'target': 21, 'value': 3},
 {'source': 2, 'target': 8, 'value': 18},
 {'source': 2, 'target': 1, 'value': 8},
 {'source': 2, 'target': 11, 'value': 6},
 {'source': 2, 'target': 5, 'value': 5},
 {'source': 2, 'target': 1, 'value': 197},
 {'source': 2, 'target': 8, 'value': 56},
 {'source': 2, 'target': 4, 'value': 24},
 {'source': 2, 'target': 19, 'value': 5},
 {'source': 2, 'target': 11, 'value': 3},
 {'source': 3, 'target': 8, 'value': 34},
 {'source': 3, 'target': 1, 'value': 24},
 {'source': 3, 'target': 10, 'value': 15},
 {'source': 3, 'target': 13, 'value': 8},
 {'source': 3, 'target': 11, 'value': 6},
 {'source': 3, 'target': 15, 'value': 4},
 {'source': 3, 'target': 5, 'value': 4},
 {'source': 3, 'target': 4, 'value': 4},
 {'source': 3, 'target': 17, 'value': 3},
 {'source': 3, 'target': 2, 'value': 3},
 {'source': 3, 'target': 12, 'value': 3},
 {'source': 3, 'target': 1, 'value': 544},
 {'source': 3, 'target': 8, 'value': 158},
 {'source': 3, 'target': 4, 'value': 61},
 {'source': 3, 'target': 10, 'value': 48},
 {'source': 3, 'target': 19, 'value': 18},
 {'source': 3, 'target': 11, 'value': 13},
 {'source': 3, 'target': 13, 'value': 13},
 {'source': 3, 'target': 15, 'value': 4},
 {'source': 4, 'target': 22, 'value': 87},
 {'source': 4, 'target': 8, 'value': 86},
 {'source': 4, 'target': 14, 'value': 53},
 {'source': 4, 'target': 10, 'value': 38},
 {'source': 4, 'target': 11, 'value': 34},
 {'source': 4, 'target': 21, 'value': 23},
 {'source': 4, 'target': 13, 'value': 23},
 {'source': 4, 'target': 9, 'value': 20},
 {'source': 4, 'target': 15, 'value': 19},
 {'source': 4, 'target': 20, 'value': 18},
 {'source': 4, 'target': 1, 'value': 17},
 {'source': 4, 'target': 16, 'value': 15},
 {'source': 4, 'target': 19, 'value': 14},
 {'source': 4, 'target': 23, 'value': 14},
 {'source': 4, 'target': 17, 'value': 14},
 {'source': 4, 'target': 12, 'value': 12},
 {'source': 4, 'target': 24, 'value': 9},
 {'source': 4, 'target': 18, 'value': 8},
 {'source': 4, 'target': 25, 'value': 8},
 {'source': 4, 'target': 26, 'value': 7},
 {'source': 4, 'target': 27, 'value': 7},
 {'source': 4, 'target': 28, 'value': 7},
 {'source': 4, 'target': 2, 'value': 6},
 {'source': 4, 'target': 29, 'value': 6},
 {'source': 4, 'target': 30, 'value': 5},
 {'source': 4, 'target': 32, 'value': 5},
 {'source': 4, 'target': 33, 'value': 4},
 {'source': 4, 'target': 34, 'value': 4},
 {'source': 4, 'target': 35, 'value': 4},
 {'source': 4, 'target': 36, 'value': 3},
 {'source': 4, 'target': 37, 'value': 3},
 {'source': 4, 'target': 38, 'value': 3},
 {'source': 4, 'target': 8, 'value': 294},
 {'source': 4, 'target': 20, 'value': 289},
 {'source': 4, 'target': 1, 'value': 174},
 {'source': 4, 'target': 14, 'value': 121},
 {'source': 4, 'target': 11, 'value': 72},
 {'source': 4, 'target': 28, 'value': 69},
 {'source': 4, 'target': 10, 'value': 65},
 {'source': 4, 'target': 13, 'value': 37},
 {'source': 4, 'target': 39, 'value': 30},
 {'source': 4, 'target': 32, 'value': 28},
 {'source': 4, 'target': 16, 'value': 27},
 {'source': 4, 'target': 40, 'value': 27},
 {'source': 4, 'target': 17, 'value': 26},
 {'source': 4, 'target': 15, 'value': 22},
 {'source': 4, 'target': 41, 'value': 18},
 {'source': 4, 'target': 42, 'value': 17},
 {'source': 4, 'target': 24, 'value': 16},
 {'source': 4, 'target': 43, 'value': 15},
 {'source': 4, 'target': 2, 'value': 14},
 {'source': 4, 'target': 33, 'value': 12},
 {'source': 4, 'target': 26, 'value': 12},
 {'source': 4, 'target': 44, 'value': 11},
 {'source': 4, 'target': 18, 'value': 10},
 {'source': 4, 'target': 34, 'value': 8},
 {'source': 4, 'target': 45, 'value': 8},
 {'source': 4, 'target': 5, 'value': 7},
 {'source': 4, 'target': 19, 'value': 6},
 {'source': 4, 'target': 46, 'value': 6},
 {'source': 4, 'target': 47, 'value': 5},
 {'source': 4, 'target': 37, 'value': 5},
 {'source': 4, 'target': 21, 'value': 5},
 {'source': 4, 'target': 48, 'value': 4},
 {'source': 4, 'target': 49, 'value': 4},
 {'source': 4, 'target': 25, 'value': 4},
 {'source': 4, 'target': 30, 'value': 4},
 {'source': 4, 'target': 50, 'value': 4},
 {'source': 4, 'target': 51, 'value': 3},
 {'source': 4, 'target': 52, 'value': 3},
 {'source': 4, 'target': 35, 'value': 3},
 {'source': 4, 'target': 53, 'value': 3},
 {'source': 4, 'target': 54, 'value': 3},
 {'source': 5, 'target': 8, 'value': 20},
 {'source': 5, 'target': 10, 'value': 10},
 {'source': 5, 'target': 6, 'value': 10},
 {'source': 5, 'target': 11, 'value': 8},
 {'source': 5, 'target': 13, 'value': 7},
 {'source': 5, 'target': 24, 'value': 5},
 {'source': 5, 'target': 18, 'value': 4},
 {'source': 5, 'target': 33, 'value': 4},
 {'source': 5, 'target': 15, 'value': 3},
 {'source': 5, 'target': 2, 'value': 3},
 {'source': 5, 'target': 55, 'value': 3},
 {'source': 5, 'target': 8, 'value': 11},
 {'source': 5, 'target': 6, 'value': 7},
 {'source': 5, 'target': 11, 'value': 7},
 {'source': 5, 'target': 16, 'value': 5},
 {'source': 5, 'target': 2, 'value': 4},
 {'source': 6, 'target': 8, 'value': 94},
 {'source': 6, 'target': 10, 'value': 53},
 {'source': 6, 'target': 14, 'value': 26},
 {'source': 6, 'target': 11, 'value': 23},
 {'source': 6, 'target': 5, 'value': 13},
 {'source': 6, 'target': 56, 'value': 13},
 {'source': 6, 'target': 57, 'value': 12},
 {'source': 6, 'target': 20, 'value': 11},
 {'source': 6, 'target': 58, 'value': 10},
 {'source': 6, 'target': 59, 'value': 9},
 {'source': 6, 'target': 30, 'value': 9},
 {'source': 6, 'target': 28, 'value': 9},
 {'source': 6, 'target': 60, 'value': 7},
 {'source': 6, 'target': 32, 'value': 6},
 {'source': 6, 'target': 15, 'value': 5},
 {'source': 6, 'target': 61, 'value': 5},
 {'source': 6, 'target': 62, 'value': 5},
 {'source': 6, 'target': 29, 'value': 4},
 {'source': 6, 'target': 13, 'value': 4},
 {'source': 6, 'target': 63, 'value': 4},
 {'source': 6, 'target': 64, 'value': 4},
 {'source': 6, 'target': 16, 'value': 3},
 {'source': 6, 'target': 4, 'value': 3},
 {'source': 6, 'target': 34, 'value': 3},
 {'source': 6, 'target': 65, 'value': 3},
 {'source': 6, 'target': 66, 'value': 3},
 {'source': 6, 'target': 67, 'value': 3},
 {'source': 6, 'target': 56, 'value': 36},
 {'source': 6, 'target': 14, 'value': 22},
 {'source': 6, 'target': 8, 'value': 20},
 {'source': 6, 'target': 10, 'value': 19},
 {'source': 6, 'target': 5, 'value': 15},
 {'source': 6, 'target': 68, 'value': 9},
 {'source': 6, 'target': 11, 'value': 8},
 {'source': 6, 'target': 28, 'value': 7},
 {'source': 6, 'target': 32, 'value': 6},
 {'source': 6, 'target': 1, 'value': 6},
 {'source': 6, 'target': 20, 'value': 5},
 {'source': 6, 'target': 57, 'value': 5},
 {'source': 6, 'target': 69, 'value': 5},
 {'source': 6, 'target': 70, 'value': 3},
 {'source': 6, 'target': 71, 'value': 3},
 {'source': 6, 'target': 64, 'value': 3},
 {'source': 6, 'target': 19, 'value': 3}
  ]
}
  
  
function run(w) {
  if (w < 600) {
    var width = w-20
    var mobiledistanse = width/3.7;
    strengthMobile = -400
    var height = 600
  } else{
    width = 600
    strengthMobile = -250
    var mobiledistanse = width/1.7;
    var height = 600
  }
  
  
  d3.select("#bee1").html('')
  var svg = d3.select("#bee1")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
  svg.append("text")
        .attr("x", 10) 
        .attr("y", 30)
        .attr("text-anchor", "start")  
        .style("font-size", '18px')
        .style("font-family", "sans-serif")
        .style("font-weight", "bold")
        .text('Карта связей новых каналов');
    svg.append("text")
        .attr("x", 10 ) 
        .attr("y", 55)
        .attr("text-anchor", "start")  
        .style("font-size", '11px')
        .style("font-family", "sans-serif")
        .style("fill", "#bdbdbd")
        .text('Размер круга - количество репостов записей канала');
      svg.append("text")
        .attr("x", 10 ) 
        .attr("y", height - 10)
        .attr("text-anchor", "start")  
        .style("font-size", '10px')
        .style("font-family", "sans-serif")
        .style("fill", "#bdbdbd")
        .text('Данные: 1 января - 20 декабря');
        var legendX = height - 60
        var legendY = legendX + 20
        svg.append("circle").attr("cx",15).attr("cy",legendX).attr("r", 6).style("fill", "#42a5f5")
        svg.append("circle").attr("cx",15).attr("cy",legendY).attr("r", 6).style("fill", "#673ab7")
        svg.append("circle").attr("cx",15).attr("cy",legendY+20).attr("r", 6).style("fill", "#ffab91")
        svg.append("text").attr("x", 25).attr("y", legendX+5).text("Новые каналы").style("font-size", "14px").attr("alignment-baseline","left")
        svg.append("text").attr("x", 25).attr("y", legendY+5).text("Старые каналы").style("font-size", "14px").attr("alignment-baseline","left")
        svg.append("text").attr("x", 25).attr("y", legendY+25).text("Другие").style("font-size", "14px").attr("alignment-baseline","left")

    var color = d3.scaleOrdinal()
    .domain([1,20,50,100,200,328])
    .range(['#f7f7f7','#d9d9d9','#bdbdbd','#969696','#636363','#252525']);
    var colorGroup = d3.scaleOrdinal()
    .domain([1,2,3])
    .range(["#42a5f5",'#ffab91','#673ab7']);
    var radius = d3.scaleSqrt()
    .domain([0,315,1115,3344,6783,12891])
    .range([ 10, 15]);
    var textRadius = d3.scaleSqrt()
    .domain([0,315,1115,3344,6783,12891])
    .range([ 9, 11]);
  var link = svg.append("g")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("path")
    .style("stroke", "#e0e0e0")
    .attr("fill", "none");

var tooltip1 = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("padding", "14px")
    .style("background-color", "#f5f5f5")
    .style("color", "black")
    .style('width', '250px')
    .style("border-radius", "6px")
    .style("border-color", "black")
    .style("font", "12px sans-serif")
    .text("tooltip");

    
var simulation1 = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force('charge', d3.forceManyBody()
      .strength(strengthMobile)
      .theta(0.2)
      .distanceMax(mobiledistanse)
    )
    .force("center", d3.forceCenter(width/2, height/2));

  var node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
    .style("fill", function(d){return colorGroup(d.group)})
    .on("mouseover", function(d) {
        if (d.value == 1) {
          tooltip1.html("<h3>"+d.name+"</h3>"+d.reposted);
        } else {
          tooltip1.html("<h3>"+d.name+"</h3><p><b>Сколько раз репостили</b>: "+d.value+"</p>"+d.reposted);
        }
        
        tooltip1.style("visibility", "visible");
    })
    .on("mousemove", function() {
        return tooltip1.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(){return tooltip1.style("visibility", "hidden");});
    var label = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(graph.nodes)
      .enter().append("text")
      .attr("font-size", function(d) {return textRadius(d.value)})
      .attr('font-family','sans-serif')
      .attr("class", "label")
      .text(function(d) { 
        var value = d.reposted.split('</p>')[0]
        value = value.split(': ')[2]
        if(d.group == 1) {
            return d.name; 
        } else if (value != undefined && parseInt(value) > 15) {
          return d.name
        }
        });

  simulation1
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation1.force("link")
      .links(graph.links);

      function positionLink(d) {
        var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }
  function ticked() {
    link
        .attr("d", positionLink)

    node
        .attr("r", function(d) {return radius(d.value)})
         .attr("cx", function (d) { return d.x; })
         .attr("cy", function(d) { return d.y; });
    label
        .attr("x", function (d) {return d.x-(this.getComputedTextLength()/2)})
        .attr("y", function(d) { return d.y; });
  }
}

        run(window.innerWidth);
        window.onresize = function(event) {
            run(window.innerWidth);
        };