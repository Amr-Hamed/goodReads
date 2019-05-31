import React , {Component} from 'react'
import Navbar from '../admin/Navbar/Navbar'
import Table from '../admin/Table/Table'
import './Main.css'
class Main extends Component{
    state = {
        selectedTab : 'categories',
        cols : ['ID' , 'Name' , 'Actions']
    }

    selectTab = (e)=>{
        if( e.target.innerHTML == 'Categories'){
            this.setState({
                selectedTab : 'categories',
                cols : ['ID' , 'Name' , 'Actions']  
            })
        } else if( e.target.innerHTML == 'Books'){
            this.setState({
                selectedTab : 'books',
                cols : ['ID' , 'Name' , 'Photo', 'Category' , 'Author', 'Actions']  
            })
        }else if ( e.target.innerHTML == 'Authors'){
            this.setState({
                selectedTab : 'authors',
                cols : ['ID' , 'First Name' , 'Last Name', 'Photo' , 'Date of Birth', 'Actions']  
            })
        }
    }

    changeState = ()=>{
        console.log(this.state)   
    }
    render(){
        return  <div className='main'>
                    <Navbar selectTab = {this.selectTab.bind(this)}></Navbar>
                        <Table className='table' selectTab={this.state.selectedTab} cols={this.state.cols} changeState={this.changeState}></Table>
                </div>
    }
}

export default Main;