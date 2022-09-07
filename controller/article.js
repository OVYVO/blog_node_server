import ArticleModel from '../models/article'

class Article{
  constructor(){
    this.add = this.add.bind(this)
    this.list = this.list.bind(this)
  }
  //添加文章
  async add(req, res){
    const { title, type, tag, poster, mdText } = req.body
    try {
      await ArticleModel.create({title, type, tag, poster, mdText})
      res.send({
        errCode: 200,
        success: '添加成功',
      })
    } catch (error) {
      res.send({
        errCode: 0,
        message: `${error}`
      })
    }
    
  }
  //文章列表
  async list(req, res){
    try {
      const list = await ArticleModel.find({}).limit(10)
      console.log('===========')
      console.log(list)
      console.log('===========')
      res.send({
        errCode: 200,
        success: `请求成功`,
        data:{
          list
        }
      })
    } catch (error) {
      
    }
  }
}

export default new Article()