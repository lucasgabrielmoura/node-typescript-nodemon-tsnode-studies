//Aqui fica as interfaces de todos os controllers

export interface HttpResponse<T>{ // O T é generic
    statusCode: number;
    body: T | string;
}