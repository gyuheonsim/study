# PostgreSQL study using Azure Linux VM

## 1. How to connect VM

```
ssh -i "C:\Users\GyuheonSim\OneDrive - Standard Energy\Study\Postgres\PostgresStudy-VM_key.pem" azureuser@20.94.78.193
```

## 2. Change User (azureuser -> postgres)

```
sudo su postgres 
```

## 3. Execute database
```
psql
```

## Others...
* Create DB & User roles
    ```
    CREATE DATABASE mydbname;
    CREATE USER myusername WITH ENCRYPTED PASSWORD 'MyPassWord';
    GRANT ALL PRIVILEGES ON DATABASE mydbname TO myusername;
    ```


