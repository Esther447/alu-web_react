import $ from 'jquery';
import './header.css';

$('body').prepend('<header></header>');
$('header').prepend('<div id="logo"></div>');
$('header').append('<h1>Holberton Dashboard</h1>');

console.log('Init header');
