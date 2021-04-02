#!/bin/bash

cd enrollment-app 
ng build 
cd ..
mv enrollment-app/dist/enrollment-app/* frontend/static/
