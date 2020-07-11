// import React, { Component } from 'react';
// import './App.css';
// import { Tabs, Table } from 'antd'
// import axios from 'axios'
// import './mock/data.js'



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       tabs1: [],
//       tabs2: [],
//       lesson: [],
//       allLesson: [],
//       overValue: 1,
//       tabValue: 1
//     }
//   }
//   componentDidMount() {
//     this._loadData();
//   }
//   async _loadData() {
//     axios.get('/allLessons/').then(res => {
//       console.log(res.data);
//       this.setState({
//         tabs1: res.data.tab1,
//         tabs2: res.data.tab2,
//         allLesson: res.data.list,
//         lesson: res.data.list
//       });
//       console.log('------------',this.state.allLesson);
//     })
//   }
//   callback(e) {
//     console.log(e)
//   }
//   render() {
    
//     const columns = [
//       {
//         title: 'Image',
//         dataIndex: 'avatar',
//         key: 'image',
//         render: src => <img src={src} />,
//       }, {
//         title: 'Name',
//         dataIndex: 'title',
//         key: 'Name'
//       }, {
//         render: () => <button>开始学习</button>
//       }
//     ];
//     const { TabPane } = Tabs;

//     // console.log(this.state.lesson, '+++++++++++++++')
//     return (
//       <div className="App">
//         <header>我的课程</header>
//         <Tabs defaultActiveKey="1"
//           onChange={callback}
//         >
//           {
//             this.props.data.map((item, index) => {
//               return (
//                 <TabPane tab={item.name} key={index}>
//                 </TabPane>
//               )
//             }
//             )
//           }

//         </Tabs>
//         <Tabs defaultActiveKey="1" type="card" onChange={callback}>
//           {
//             this.props.data.map((item, index) => {
//               return (
//                 <TabPane tab={item.name} key={index} value={item.value} >
//                 </TabPane>
//               )
//             })
//           }
//         </Tabs>
//         <Table
//           columns={columns}
//           dataSource={this.state.lesson}
//           showHeader={false}
//         />
//       </div>
//     );
//   }
// }

// export default App;
import './App.css';
import { Tabs } from 'antd';
import React, { Component } from 'react';
import Item from './components/item/Item';
import axios from 'axios';
import './mock/data';

const { TabPane } = Tabs;

class App extends Component {
  state = {
    allLesson:[],
    lesson:[],
  };
  componentDidMount(){
    axios.get('/mock')
    .then(res => {
      this.setState({
        allLesson : res.data.userinfo,
        lesson : res.data.userinfo,
      })
      console.log(res.data.userinfo);
    })
  }

  typeChange = key => {
    console.log(key)
    let {allLesson} = this.state;
    switch (key) {
      case '1':
        this.setState({
          lesson:allLesson.filter(i => {
            return true;
          }),
        })
        break;
      case '2':
        this.setState({
            lesson:allLesson.filter(i => {
            return i.isFinished === 0;
          }),
        })
        break;
      case '3':
        this.setState({
            lesson:allLesson.filter(i => {
            return i.isFinished === 1;
          }),
        })
        break;
      default:
        break;
    }
  }
  handleChange = (key) => {
    const { allLesson } = this.state;
    switch(key) {
      case '1':
        this.setState({
          lesson: allLesson.filter(() => {
            return true;
          })
        })
      case '2':
        this.setState({
          lesson: allLesson.filter((i) => {
            return i.total > 70;
          })
        })
    }
  }
  render() {
    let {lesson} = this.state;
    let items = lesson.map(user => <Item key={user.id}
                                          imgUrl={user.imgUrl}
                                          title={user.title}
                                          total={user.total}
                                          learned={user.learned}
                                          studyPercentage={user.studyPercentage}
                                          type={user.type}
                                          isFinished={user.isFinished}
    />)
    return (
      <div className="wrapper">
        <div className="App">
          <h2>我的课程</h2>
          <Tabs defaultActiveKey="1" size={'Default'} style={{ marginBottom: 32 }} onChange={this.typeChange}>
            <TabPane tab="全部" key="1">
            </TabPane>
            <TabPane tab="未学完" key="2">
            </TabPane>
            <TabPane tab="已学完" key="3">
            </TabPane>
          </Tabs>
          <Tabs defaultActiveKey="1" type="card" size={'Default'} onChange={this.handleChange}>
            <TabPane tab="所有形式" key="1">
              {items}
            </TabPane>
            <TabPane tab="专栏" key="2">
              {items}
            </TabPane>
            <TabPane tab="视频课" key="3">
              Content of card tab 3
            </TabPane>
            <TabPane tab="微课" key="4">
              Content of card tab 4
            </TabPane>
            <TabPane tab="每日一课" key="5">
              Content of card tab 5
            </TabPane>
            <TabPane tab="其他" key="6">
              Content of card tab 6
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default App;
