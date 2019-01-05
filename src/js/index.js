import $ from 'jquery';
import {Model} from "./model";
import {View} from "./view";
import 'bootstrap';
import '../sass/app.sass'

VK.Auth.login();

Model.start();
View.start();