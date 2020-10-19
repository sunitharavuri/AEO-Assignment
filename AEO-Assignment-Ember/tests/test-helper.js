import Application from 'aeo-assignment-ember/app';
import config from 'aeo-assignment-ember/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
