import React from 'react';
import './ranking.styl';
// import Loading from '../../common/loading/Loading';
// 短链接 @src目录 路径别名 @
import Loading from '@/common/loading/Loading'
import { getRankingList } from '@/api/ranking';
import LazyLoad from 'react-lazyload';

class Ranking extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            rankingList: []
        }
    }
    componentDidMount() {
        getRankingList()
            .then((res) => {
                console.log(res)
                this.setState({
                    loading: false,
                    rankingList: res.data.topList
                })
            })
    }
    render() {
        return (
            <div className="music-ranking">
                <div className="ranking-list">
                    {
                        this.state.rankingList.map(ranking => {
                            return (
                                <div className="ranking-wrapper" key={ranking.id}
                                // onClick={}
                                >
                                    <div className="left">
                                        <LazyLoad>
                                            <img src={ranking.picUrl} alt={ranking.title} />
                                        </LazyLoad>
                                    </div>
                                    <div className="right">
                                        <h1 className="ranking-title">
                                            {ranking.title}
                                        </h1>
                                        {
                                            ranking.songList.map((song, index) => {
                                                return (
                                                    <div className="top-song" key={index}>
                                                        <span className="index">{index + 1}</span>
                                                        <span>{song.songname}</span>
                            &nbsp;-&nbsp;
                                                        <span className="song">{song.singername}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Loading show={this.state.loading} title="正在加载排行榜..."></Loading>
            </div>

        )
    }
}

export default Ranking;