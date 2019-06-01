import React , {Component} from 'react'
import axios from 'axios'
import './Table.css'

class Table extends Component{

    state = {
        Head : this.props.cols.map( (col)=>{
            return <th key={col}>{col}</th>
        }),
        raws : '',
        selectedTab : this.props.selectedTab
    }
    componentWillReceiveProps(nextProps){
        const Head = nextProps.cols.map( (col)=>{
            return <th key={col}>{col}</th>
        })       
        this.setState({
            Head : Head,
            selectedTab : nextProps.selectedTab
        })
        this.getData(nextProps.selectedTab)
        
    }

    getData = (e)=>{
        axios.get(`http://localhost:4000/admin/${e}`).then(res =>{
            console.log(res.data[e]);
            
            let raws = res.data[e].map( (type)=>{
                let raw = Object.values(type).map( (field)=>{
                    if( field != 0){
                        return <td>{field}</td>
                    }
                })
                return <tr>{raw}</tr>
            })
            this.setState({
                raws : raws
            })
        })
    }

    // componentDidMount(){
    //     this.getData();
    // }

    render(){
        
        return <div className='content' id='content'>
                    <table className='table'>
                        <tbody className='tableBody' ref={ (tableBody)=>{this.tableBody=tableBody}}>
                            <tr className='headRaw' ref={(headRaw)=>{this.headRaw=headRaw}}>{this.state.Head}</tr>
                            {this.state.raws}
                        </tbody>
                    </table>
                </div>
    }
}

export default Table;