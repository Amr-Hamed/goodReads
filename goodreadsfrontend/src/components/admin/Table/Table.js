import React , {Component} from 'react'
import axios from 'axios'
import './Table.css'

class Table extends Component{

    state = {
        Head : this.props.cols.map( (col)=>{
            return <th key={col}>{col}</th>
        })
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.cols) 
        const Head = nextProps.cols.map( (col)=>{
            return <th key={col}>{col}</th>
        })       
        this.setState({
            Head : Head
        })
    }

    componentDidMount(){
        axios.get('localhost:3000/admin/categories').then(res =>{
            console.log(res.data , 'res')
        })
    }

    render(){
        
        return <div className='content' id='content'>
                    <table className='table'>
                        <tbody className='tableBody' ref={ (tableBody)=>{this.tableBody=tableBody}}>
                            <tr className='headRaw' ref={(headRaw)=>{this.headRaw=headRaw}}>{this.state.Head}</tr>
                        </tbody>
                    </table>
                </div>
    }
}

export default Table;