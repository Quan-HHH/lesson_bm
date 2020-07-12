import React, { Component } from 'react';
import './App.css';
import { Tabs, Table } from 'antd'
import axios from 'axios'
import './mock/data.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs1: [],
      tabs2: [],
      overLesson: [],
      tabLesson: [],
      allLesson: [],
      filteredLesson: []
    }
  }
  componentDidMount() {
    this._loadData();
  }
  async _loadData() {
    axios.get('/allLessons/').then(res => {
      console.log(res.data);
      this.setState({
        tabs1: res.data.tab1,
        tabs2: res.data.tab2,
        allLesson: res.data.list,
        overLesson: res.data.list,
        tabLesson: res.data.list,
        filteredLesson: res.data.list
      });
    })
  }

  handleOverFilter = (key) => {
    // 第一层过滤 先过滤出Over的课程 存在overLesson里
    console.log('handleOverFilter')
    const { allLesson } = this.state;
    if(key === '0') {
      this.setState({
        overLesson: allLesson
      })
      this.handleFilter()
    } else {
      this.setState({
        overLesson: allLesson.filter((item) => {
          return item.over.toString() === key;
        })
      })
    }
  }

  handleTabFilter = (key) => {
    console.log('handleTabFilter', key, typeof key)
    const { allLesson } = this.state;
    if(key === '0') {
      this.setState({
        tabLesson: allLesson
      })
    } else {
      this.setState({
        tabLesson: allLesson.filter((item) => {
          return item.tab.toString() === key;
        })
      })
    }
  }


  render() {
    const columns = [
      {
        title: 'Image',
        dataIndex: 'avatar',
        key: 'image',
        render: src => <img src={src} alt="" />,
      }, {
        title: 'Name',
        dataIndex: 'title',
        key: 'Name'
      },{
        title: 'Name',
        dataIndex: 'over',
        key: 'over'
      },{
        title: 'Name',
        dataIndex: 'tab',
        key: 'tab'
      },{
      render: (i) => //{console.log(i, this)}
      `已学${i.already}讲|共${i.all}讲|已学${(i.already*100/i.all).toFixed(2)}%`
      },{
        render: () => <button>开始学习</button>
      }
    ];
    const { TabPane } = Tabs;
    let { allLesson, tabLesson, overLesson, filteredLesson } = this.state;
    filteredLesson = allLesson.filter((item) => {
      return (item.over === 0 || overLesson.includes(item)) && (item.tab === 0 || tabLesson.includes(item))
    })
    console.log(this.state.overLesson, this.state.tabLesson)
    return (
      <div className="App">
        <header>我的课程</header>
        <Tabs defaultActiveKey="1"
          onChange={this.handleOverFilter}
        >
          {
            this.state.tabs1.map((item, index) => {
              return (
                <TabPane tab={item.name} key={index}>
                </TabPane>
              )
            }
            )
          }

        </Tabs>
        <Tabs defaultActiveKey="1" type="card" onChange={this.handleTabFilter}>
          {
            this.state.tabs2.map((item, index) => {
              return (
                <TabPane tab={item.name} key={index} value={item.value} >
                </TabPane>
              )
            })
          }
        </Tabs>
        <Table
          columns={columns}
          dataSource={filteredLesson}
          showHeader={false}
        />
      </div>
    );
  }
}

export default App;

// import './App.css';
// import { Tabs } from 'antd';
// import React, { Component } from 'react';
// import Item from './components/item/Item';
// import axios from 'axios';
// import './mock/data';

// const { TabPane } = Tabs;

// class App extends Component {
//   state = {
//     allLesson:[],
//     lesson:[],
//   };
//   componentDidMount(){
//     axios.get('/mock')
//     .then(res => {
//       this.setState({
//         allLesson : res.data.userinfo,
//         lesson : res.data.userinfo,
//       })
//       console.log(res.data.userinfo);
//     })
//   }

//   typeChange = key => {
//     console.log(key)
//     let {allLesson} = this.state;
//     switch (key) {
//       case '1':
//         this.setState({
//           lesson:allLesson.filter(i => {
//             return true;
//           }),
//         })
//         break;
//       case '2':
//         this.setState({
//             lesson:allLesson.filter(i => {
//             return i.isFinished === 0;
//           }),
//         })
//         break;
//       case '3':
//         this.setState({
//             lesson:allLesson.filter(i => {
//             return i.isFinished === 1;
//           }),
//         })
//         break;
//       default:
//         break;
//     }
//   }
//   handleChange = (key) => {
//     const { allLesson } = this.state;
//     switch(key) {
//       case '1':
//         this.setState({
//           lesson: allLesson.filter(() => {
//             return true;
//           })
//         })
//       case '2':
//         this.setState({
//           lesson: allLesson.filter((i) => {
//             return i.total > 70;
//           })
//         })
//     }
//   }
//   render() {
//     let {lesson} = this.state;
//     let items = lesson.map(user => <Item key={user.id}
//                                           imgUrl={user.imgUrl}
//                                           title={user.title}
//                                           total={user.total}
//                                           learned={user.learned}
//                                           studyPercentage={user.studyPercentage}
//                                           type={user.type}
//                                           isFinished={user.isFinished}
//     />)
//     return (
//       <div className="wrapper">
//         <div className="App">
//           <h2>我的课程</h2>
//           <Tabs defaultActiveKey="1" size={'Default'} style={{ marginBottom: 32 }} onChange={this.typeChange}>
//             <TabPane tab="全部" key="1">
//             </TabPane>
//             <TabPane tab="未学完" key="2">
//             </TabPane>
//             <TabPane tab="已学完" key="3">
//             </TabPane>
//           </Tabs>
//           <Tabs defaultActiveKey="1" type="card" size={'Default'} onChange={this.handleChange}>
//             <TabPane tab="所有形式" key="1">
//               {items}
//             </TabPane>
//             <TabPane tab="专栏" key="2">
//               {items}
//             </TabPane>
//             <TabPane tab="视频课" key="3">
//               Content of card tab 3
//             </TabPane>
//             <TabPane tab="微课" key="4">
//               Content of card tab 4
//             </TabPane>
//             <TabPane tab="每日一课" key="5">
//               Content of card tab 5
//             </TabPane>
//             <TabPane tab="其他" key="6">
//               Content of card tab 6
//             </TabPane>
//           </Tabs>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
