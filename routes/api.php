<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/articles', 'ArticleController@index');
Route::post('/article/store', 'ArticleController@store');
Route::get('/article/edit/{id}', 'ArticleController@getArticle');
Route::get('/article/show/{id}', 'ArticleController@getArticle');
Route::put('/article/update/{id}', 'ArticleController@update');
Route::delete('/article/delete/{id}', 'ArticleController@delete');