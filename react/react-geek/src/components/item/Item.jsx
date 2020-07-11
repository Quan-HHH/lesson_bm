import React, { Component } from 'react';
import { Button } from 'antd';

class Item extends Component {
    // state = {
    //     imgUrl : 'http://pic2.nipic.com/20090413/60867_174915098_2.jpg',
    //     title : '浏览器',
    //     total : 45,
    //     learned : 17,
    //     studyPercentage : 55,
    //     type : '专栏',
    // }
    render() { 
        let {imgUrl,title,total,learned,studyPercentage,type,isFinished} = this.props;
        return (
            <div className="item">
                <div className="img">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="description">
                    <div className="title">
                        <div className="itemTitle">
                            {title}
                        </div>
                        <div className="schedule">
                            共{total}讲｜已学{learned}讲｜学完{isFinished?100:studyPercentage}%
                        </div>
                    </div>
                    <div className="type">
                        {type}
                    </div>
                    <div className="button">
                        <Button>开始学习</Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Item;
