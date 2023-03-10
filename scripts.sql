CREATE TABLE usuarios (
    userId int not null auto_increment,
    nombreCompleto varchar(100),
    userName varchar(50),
    password varchar(50),
    direccion varchar(200),
    telefono int,
    primary key (userId)
);