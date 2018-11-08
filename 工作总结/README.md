

- 1.文本过长尾部出现省略号的代码
```
display:block;
width:300px;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;


```
- 2.字体图标随着屏幕大小改变要给字体图标本身设置font-size
- 3.轮播图插件引入的时候，最好从父级传入数据图片，这样能实现真正意义上的封装，对于只有两张图片的轮播图，由于为了实现无缝轮播，原有图片的基础上前后各加一张图片，所以索引会变大，要对索引index进行处理
```
if(index>=2){index=index-2;}
```