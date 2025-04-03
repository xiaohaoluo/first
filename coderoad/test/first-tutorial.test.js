const assert = require('assert')  
const fs = require('fs')  
const util = require('util')  
const path = require('path')  

const readdir = util.promisify(fs.readdir)  
const getRootDir = async (dir = process.cwd()) => {  
  const pathToRoot = path.join(dir, '..')  
  const rootDir = await readdir(pathToRoot)  

  if (!rootDir) {  
    throw new Error(`无法找到文件夹 ${pathToRoot}`)  
  }  

  return rootDir  
}  

describe('first-tutorial 文件夹', () => {  
  let rootDir  
  before(async () => {  
    rootDir = await getRootDir()  
  })  

  it('应该有一个 index.html 文件', async () => {  
    assert(rootDir.indexOf('index.html') >= 0)  
  })  
})  