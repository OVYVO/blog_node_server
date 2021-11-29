import ArticleModel from '../models/article'

class Article{
  constructor(){
    this.add = this.add.bind(this)
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

}

export default new Article()