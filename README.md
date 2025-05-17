# FE Coding Challenge – Wetter.com

This project is a solution for the Frontend Coding Challenge as described in the original instructions:  
👉 [https://github.com/wettercom/fe-coding-challenge](https://github.com/wettercom/fe-coding-challenge)

## 🌐 Live Demo

You can test the deployed version here:

- [7-Day Forecast](https://fe-coding-challenge-alpha.vercel.app/this-is-the-forecast-page/7-days/DE0001020.html)
- [3-Day Forecast](https://fe-coding-challenge-alpha.vercel.app/this-is-the-forecast-page/3-days/DE0001020.html)

## 🔧 Technical Highlights
* For bots all weather panel are expanded by default 

### ✅ URL Matching Logic

 * Matches forecast URLs following the documented schema in the readme:
 * Supports only "3-days" or "7-days" in the path
 * Accepts either "forecast" or "this-is-the-forecast-page" as the base path
 * Restricts the file extension to ".html" (or none)
 * Ignores other extensions like .json or .xml
 
 
## 🔧 Performance 
Project is achieving core web vitals 100% score on vercel montioring platform 

![alt text](image.png)