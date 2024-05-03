# import google.generativeai as genai
# from flask import Flask, request, jsonify
# import sqlite3


# genai.configure(api_key="AIzaSyCweoRMLwzDJo1VlAgZOFoavZy4jIB9bb4")
# model = genai.GenerativeModel('gemini-pro')


# app = Flask(__name__)

# # Function to create the database table if it doesn't exist
# def create_table():
#     conn = sqlite3.connect('services.db')
#     c = conn.cursor()
#     c.execute('''CREATE TABLE IF NOT EXISTS services
#                  (id INTEGER PRIMARY KEY AUTOINCREMENT,
#                  name TEXT,
#                  phone_no TEXT,
#                  address TEXT,
#                  email_address TEXT,
#                  job TEXT,
#                  description TEXT)''')
#     print("oodssss")
#     c.execute('''CREATE TABLE IF NOT EXISTS goods
#                  (id INTEGER PRIMARY KEY AUTOINCREMENT,
#                  name TEXT,
#                  volume TEXT,
#                  quality TEXT,
#                  certification TEXT,
#                  pdt_desc TEXT,
#                  pdt_price TEXT)''')
#     conn.commit()
#     conn.close()

# # Route to receive data and store it in the database
# @app.route('/add_service', methods=['POST'])
# def add_service():
#     print("hi")
#     data = request.json
#     name = data.get('name')
#     phone_no = data.get('phone_no')
#     address = data.get('address')
#     email_address = data.get('email_address')
#     job = data.get('job')
#     description = data.get('description')

#     if not (name and phone_no and address and email_address and job and description):
#         return jsonify({'error': 'Incomplete data'}), 400

#     conn = sqlite3.connect('services.db')
#     c = conn.cursor()
#     c.execute('''INSERT INTO services (name, phone_no, address, email_address, job, description) 
#                  VALUES (?, ?, ?, ?, ?, ?)''', (name, phone_no, address, email_address, job, description))
#     conn.commit()
#     conn.close()

#     return jsonify({'message': 'Service added successfully'}), 201



# # app = Flask(__name__)

# # Route to receive data and store it in the database
# @app.route('/add_goods', methods=['POST'])
# def add_goods():
#     print("hi")
#     data = request.json
#     name = data.get('name')
#     volume = data.get('volume')
#     quality = data.get('quality')
#     certification = data.get('certification')
#     pdt_desc = data.get('pdt_desc')
#     pdt_price = data.get('pdt_price')

#     if not (name and volume and quality and certification and pdt_desc and pdt_price):
#         return jsonify({'error': 'Incomplete data'}), 400

#     conn = sqlite3.connect('services.db')
#     c = conn.cursor()
#     c.execute('''INSERT INTO goods (name, volume, quality, certification, pdt_desc, pdt_price) 
#                  VALUES (?, ?, ?, ?, ?, ?)''', (name, volume, quality, certification, pdt_desc, pdt_price))
#     conn.commit()
#     conn.close()

#     return jsonify({'message': 'Service added successfully'}), 201







# # Function to fetch people's information based on job title
# def get_people_info(job_title):
#     conn = sqlite3.connect('services.db')
#     c = conn.cursor()
#     c.execute("SELECT * FROM services WHERE job=?", (job_title,))
#     rows = c.fetchall()
#     conn.close()
#     return rows

# # Example function to interact with Gemini API and get job usefulness
# def get_job_usefulness(prompt):
#     # Your implementation to interact with Gemini API to get job usefulness based on prompt
#     # This is a placeholder for the actual implementation
#     return ['Plumber', 'Electrician']  # Assuming these are the useful jobs returned by Gemini API

# # Route to receive prompt, analyze jobs, and return people's information
# @app.route('/analyze_jobs', methods=['POST'])
# def analyze_jobs():
#     data = request.json
#     prompt = data.get('prompt')

#     if not prompt:
#         return jsonify({'error': 'Prompt not provided'}), 400

#     useful_jobs = get_job_usefulness(prompt)
#     if not useful_jobs:
#         return jsonify({'message': 'No useful jobs found for the given prompt'}), 200

#     people_info = []
#     for job in useful_jobs:
#         job_info = get_people_info(job)
#         people_info.extend(job_info)

#     return jsonify({'people_info': people_info}), 200








# if __name__ == '__main__':
#     create_table()
#     app.run(debug=True)



import google.generativeai as genai
import os
from flask import Flask, request, jsonify
import sqlite3

print("hello")
#genai.configure(api_key="ABTWhQHXaxQk2SVAMtMOQpPa0YCGImvsw4iT6Pfv5JcXBXhoM95C1lfV4Gu5uLBvlLDTj1yrG7Q")
genai.configure(api_key="AIzaSyCweoRMLwzDJo1VlAgZOFoavZy4jIB9bb4")
model = genai.GenerativeModel('gemini-pro')
# response = model.generate_content('Please summarise this document: ...')

# print(response.text)




# from flask import Flask, request, jsonify
# import sqlite3

# import google.generativeai as genai

genai.configure(api_key="AIzaSyCweoRMLwzDJo1VlAgZOFoavZy4jIB9bb4")
model = genai.GenerativeModel('gemini-pro')


app = Flask(__name__)

# Function to create the database table if it doesn't exist
def create_table():
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS services
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT,
                 age TEXT,
                 gender TEXT,
                 phone_no TEXT,
                 address TEXT,
                 email_address TEXT,
                 job TEXT,
                 description TEXT
                 salary TEXT,
                 add_links TEXT)''')


    
    c.execute('''CREATE TABLE IF NOT EXISTS goods
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT,
                 volume TEXT,
                 quality TEXT,
                 certification TEXT,
                 pdt_desc TEXT,
                 pdt_price TEXT
                 owner_name TEXT,
                 owner_phone TEXT,
                 owner_email TEXT)''')
    conn.commit()
    conn.close()




# Route to receive data and store it in the database
@app.route('/add_service', methods=['POST'])
def add_service():
    print("hi")
    data = request.json
    name = data.get('name')
    age = data.get('age')
    gender = data.get('gender')
    phone_no = data.get('phone_no')
    address = data.get('address')
    email_address = data.get('email_address')
    job = data.get('job')
    description = data.get('description')
    salary = data.get('salary')
    add_links = data.get('add_links') 


    if not (name and age and gender and phone_no and address and email_address and job and description and salary and add_links):
        return jsonify({'error': 'Incomplete data'}), 400

    

    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute('''INSERT INTO services (name, age, gender, phone_no, address, email_address, job, description, salary, add_links) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''', (name, age, gender, phone_no, address, email_address, job, description, salary, add_links))
    conn.commit()
    conn.close()


    return jsonify({'message': 'Service added successfully'}), 201


# app = Flask(__name__)

# Route to receive data and store it in the database

@app.route('/add_goods', methods=['POST'])
def add_goods():
    print("hi")
    data = request.json
    name = data.get('name')
    volume = data.get('volume')
    quality = data.get('quality')
    certification = data.get('certification')
    pdt_desc = data.get('pdt_desc')
    pdt_price = data.get('pdt_price')
    owner_name = data.get('owner_name')
    owner_phone = data.get('owner_phone')
    owner_email = data.get('owner_email')


    if not (name and volume and quality and certification and pdt_desc and pdt_price and owner_name and owner_phone and owner_email):
        return jsonify({'error': 'Incomplete data'}), 400

    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute('''INSERT INTO goods (name, volume, quality, certification, pdt_desc, pdt_price, owner_name, owner_phone, owner_email) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''', (name, volume, quality, certification, pdt_desc, pdt_price, owner_name, owner_phone, owner_email))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Service added successfully'}), 201

def get_jobs():
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT DISTINCT job FROM services ")
    rows = c.fetchall()
    conn.close()
    return rows



def get_jobs():
    conn=sqite3.connect('services.db')
    c=conn.cursor()
    c.execute('select distinct job from ')



# Function to fetch people's information based on job title
def get_people_info(job_title):
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT * FROM services WHERE job=?", (job_title,))
    rows = c.fetchall()
    conn.close()
    return rows

# Example function to interact with Gemini API and get job usefulness
def get_job_usefulness(prompt):
    print(get_jobs())
    response = model.generate_content('you are being used in a website for filtering services , this is the usecase of user ['+prompt+'] and these are service titles available ['+str(get_jobs())+'] show output of the names of services suitable. The output should be in the same format string seperated by commas')
    
    print(response.text)
    return response.text.split(', ')  # Assuming these are the useful jobs returned by Gemini API



# Route to receive prompt, analyze jobs, and return people's information
@app.route('/analyze_jobs', methods=['POST'])
def analyze_jobs():
    data = request.json
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'Prompt not provided'}), 400

    useful_jobs = get_job_usefulness(prompt)
    if not useful_jobs:
        return jsonify({'message': 'No useful jobs found for the given prompt'}), 200

    people_info = []
    for job in useful_jobs:
        job_info = get_people_info(job)
        people_info.extend(job_info)

    return jsonify({'people_info': people_info}), 200

#######################################################################################################
#code with specialisation----



def sget_jobs():
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT description FROM services ")
    rows = c.fetchall()
    conn.close()
    return rows




# Function to fetch people's information based on job title

def sget_people_info(job_desc):
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT * FROM services WHERE description=?", (job_desc,))
    rows = c.fetchall()
    conn.close()
    return rows


# Example function to interact with Gemini API and get job usefulness
def sget_job_usefulness(prompt):
    print(sget_jobs())
    response = model.generate_content('you are being used in a website for filtering services , this is the usecase of user ['+prompt+'] and the service experiences of each person given below  ['+str(sget_jobs())+'] select the experiences of services suitable. The output should be experiences seperated by commas')
    
    print(response.text)
    return response.text.split(', ')  # Assuming these are the useful jobs returned by Gemini API

# Route to receive prompt, analyze jobs, and return people's information
@app.route('/sanalyze_jobs', methods=['POST'])
def sanalyze_jobs():
    data = request.json
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'Prompt not provided'}), 400

    useful_jobs = sget_job_usefulness(prompt)
    if not useful_jobs:
        return jsonify({'message': 'No useful jobs found for the given prompt'}), 200

    people_info = []
    for job in useful_jobs:
        job_info = sget_people_info(job)
        people_info.extend(job_info)

    return jsonify({'people_info': people_info}), 200
###########################################################################################################
#goods

def get_goods():
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT DISTINCT name FROM goods ")
    rows = c.fetchall()
    conn.close()
    return rows



def get_goods_info(name_title):
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT * FROM goods WHERE name=?", (name_title,))
    rows = c.fetchall()
    conn.close()
    return rows



def get_goods_usefulness(prompt):
    print(get_goods())
    #response = model.generate_content('you are being used in a website for filtering goods , this is the usecase of user ['+prompt+'] and these are goods available ['+str(get_goods())+'] show output of the names of goods suitable from all mentioned goods. The output should be in the same format string seperated by commas')
    
    #print(response.text)
    #print(response.text.split(', '))
    #return response.text.split(', ')
    response = model.generate_content('In a bulleted list format, recommend goods suitable for the user prompt ['+prompt+'] from the available goods ['+str(get_goods())+'].')
    print(response.text)
    input_string = response.text

# Split the string by newline characters and remove empty elements
    items = [item.strip('- ') for item in input_string.split('\n') if item.strip('- ')]
    return items  



# Route to receive prompt, analyze goods, and return people's information
# @app.route('/analyze_goods', methods=['POST'])
# def analyze_goods():
#     data = request.json
#     prompt = data.get('prompt')

#     if not prompt:
#         return jsonify({'error': 'Prompt not provided'}), 400

#     useful_goods = get_goods_usefulness(prompt)
#     if not useful_goods:
#         return jsonify({'message': 'No useful goods found for the given prompt'}), 200

#     goods_info = []
#     for goods in useful_goods:
#         goods_info = get_goods_info(goods)
#         goods_info.extend(goods_info)

    
#     return jsonify({'goods_info': goods_info}), 200

@app.route('/analyze_goods', methods=['POST'])
def analyze_goods():
    data = request.json
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'Prompt not provided'}), 400

    useful_goods = get_goods_usefulness(prompt)
    if not useful_goods:
        return jsonify({'message': 'No useful goods found for the given prompt'}), 200

    goods_infos = []
    for goods_name in useful_goods:
        goods_info = get_goods_info(goods_name)
        goods_infos.extend(goods_info)

    return jsonify({'goods_info': goods_infos}), 200
############################################################################################################
def sget_goods():
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT description FROM goods ")
    rows = c.fetchall()
    conn.close()
    return rows




# Function to fetch people's information based on job title

def sget_goods_info(job_desc):
    conn = sqlite3.connect('services.db')
    c = conn.cursor()
    c.execute("SELECT * FROM gooods WHERE description=?", (job_desc,))
    rows = c.fetchall()
    conn.close()
    return rows


# Example function to interact with Gemini API and get job usefulness
def sget_goods_usefulness(prompt):
    print(sget_goods())
    response = model.generate_content('you are being used in a website for filtering goods , this is the usecase of user ['+prompt+'] and the goods are given  ['+str(sget_jobs())+'] select the experiences of services suitable. The output should be experiences seperated by commas')
    
    print(response.text)
    return response.text.split(', ')  # Assuming these are the useful jobs returned by Gemini API

# Route to receive prompt, analyze jobs, and return people's information
@app.route('/sanalyze_goods', methods=['POST'])
def sanalyze_goods():
    data = request.json
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'Prompt not provided'}), 400

    useful_jobs = sget_goods_usefulness(prompt)
    if not useful_jobs:
        return jsonify({'message': 'No useful jobs found for the given prompt'}), 200

    people_info = []
    for job in useful_goods:
        job_info = sget_people_info(job)
        people_info.extend(job_info)

    return jsonify({'people_info': people_info}), 200





############################################################################################################

@app.route('/execute_command', methods=['POST'])
def execute_command():
    command1 = request.form.get('command')
    command = 'streamlit run streamlit1.py'
    if command:
        import subprocess
        try:
            result = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
            return result.decode(), 200
        except subprocess.CalledProcessError as e:
            return f"Error: {e.output.decode()}", 400
    else:
        return "No command provided", 400



if __name__ == '__main__':
    create_table()
    app.run(debug=True)



