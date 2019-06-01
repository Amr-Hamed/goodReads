import React , {Component} from 'react'
import Navbar from '../admin/Navbar/Navbar'
import Table from '../admin/Table/Table'
import './Main.css'
class Main extends Component{
    state = {
        selectedTab : 'category',
        cols : ['ID' , 'Name' , 'Actions']
    }

    selectTab = (e)=>{
        if( e.target.innerHTML == 'Categories'){
            this.setState({
                selectedTab : 'category',
                cols : ['ID' , 'Name' , 'Actions']  
            })
        } else if( e.target.innerHTML == 'Books'){
            this.setState({
                selectedTab : 'book',
                cols : [ 'Category' , 'Author' , 'ID' , 'Name' , 'Photo', 'Actions']  
            })
        }else if ( e.target.innerHTML == 'Authors'){
            this.setState({
                selectedTab : 'author',
                cols : ['ID' , 'First Name' , 'Last Name' , 'Date of Birth', 'Photo' , 'Actions']  
            })
        }
    }
  
    render(){
        return  <div className='main'>
                    <Navbar selectTab = {this.selectTab.bind(this)}></Navbar>
                        <Table className='table' selectedTab={this.state.selectedTab} cols={this.state.cols} ></Table>
                </div>
    }
}

export default Main;