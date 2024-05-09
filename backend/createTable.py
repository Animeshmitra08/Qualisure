import sqlite3

conn = sqlite3.connect('database.db')

cursor = conn.cursor()
cursor.execute('CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY, name TEXT, data BLOB)')
conn.commit()

conn.close()