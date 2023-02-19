
function generateCSS(data) {
    return `

    header {
        background-color: red;
        color: white;
        text-align: center;
        height: 100px;
        padding-top: 8px;
    }
    
    .employee-card {
        border: 2px solid black;
        width:min-content;
        height:250px;
        float: left;
        margin: 4px;
        padding: 4px;
    }
    
    .card-header {
        background-color: blue;
        color: white;
        text-align: center;
    }
    
    .card-body {
        background-color: lightgray;
        color: black;
        text-align: left;
    }
    
    
    


`


}



module.exports = generateCSS;