import './App.css';
import './S.css';
import React,{useState} from 'react';

function App() {
  return (
    <div>
    <header>
    <Main />
    <App1 />
    <Men /> 
    <Women />
    <Search />
            
      </header>
      
    </div>
    
  );
}
function Main()
{
    return(
    <div className="S">
        <span class="ellipse"></span>

    </div>
 );
}
function App1()
{
   return(
      <div className="App" >
      <header className="App-header">
      <h4>S A R V H</h4> 
      </header>
      
  </div>
  );
}
function Men()
{
  return(
    <div classname="App">
    <header className="App-he">
     <h5>MEN</h5> 
      </header>
      
    </div>
  );

}
function Women()
{
  return(
    <div classname="App">
      <header className="App-she">
      <h5> WOMEN</h5>
      </header>
      
    </div>
  );

}

function Search()
{
  return(
    <div className="App">
      <header className="App-search">
      
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." />
      <ul id="myUL">
      <li><a href="#">Adele</a></li>
      <li><a href="#">Agnes</a></li>

      <li><a href="#">Billy</a></li>
      <li><a href="#">Bob</a></li>

     <li><a href="#">Calvin</a></li>
      <li><a href="#">Christina</a></li>
     <li><a href="#">Cindy</a></li>
     </ul>
     </header>
    </div>
  );
}
export default App;