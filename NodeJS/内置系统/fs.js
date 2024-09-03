const fs = require('fs')
fs.readFile('C:\Users\Lenovo\Desktop\frontend-study\1\NoodJS\内置模块\test.txt',
    'utf-8',
    (err,data) => {
        console.log('文件内容是:',data)
    }
)