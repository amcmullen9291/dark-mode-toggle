import React from 'react';
import { useState, useEffect } from 'react';


const HomePage = () => {
    const [ darkMode, setDarkMode ] = useState(false);
        
    return (
        <>
        <div className={darkMode ? 'dark-mode' : 'light-dark'}>
            <div className="container">
                <span style={{color: 'yellow'}}>*</span>
                <div className="switch-checkbox">
                    <label className="switch">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)}/>
                    <span className="slider round"></span>
                    </label>
                    </div>
                <span style={{color: 'purple'}}>)</span>
            </div>
            <div className={darkMode ? 'theme-dark' : 'theme-light'}>
            <div id="outerBox">
                <div id="innerBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Dapibus ultrices in iaculis nunc sed. Lobortis elementum nibh tellus molestie nunc. Sed arcu non odio euismod lacinia at quis risus. Arcu ac tortor dignissim convallis aenean et tortor at risus. Ornare suspendisse sed nisi lacus sed. Sodales neque sodales ut etiam sit amet nisl purus in. Sed euismod nisi porta lorem. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Risus ultricies tristique nulla aliquet enim.

    Turpis egestas sed tempus urna et. Suspendisse sed nisi lacus sed viverra tellus. Congue nisi vitae suscipit tellus mauris a diam. Enim nec dui nunc mattis enim ut. Amet purus gravida quis blandit turpis. Id aliquet risus feugiat in ante metus. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. In fermentum posuere urna nec. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Tristique senectus et netus et. Faucibus turpis in eu mi bibendum. Lectus arcu bibendum at varius.
                </div>
            </div>
        </div>
        </div>
        </>  
    );
};

export default HomePage;