
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
        width: 200px;
        height: 275px;
        float: left;
        margin: 4px;
        padding: 4px;
    }
    
    .card-header {
        background-color: blue;
        color: white;
        text-align: center;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    
    .card-body {
        background-color: lightgray;
        color: black;
        text-align: left;
    }
    
    .list-style {
        list-style-type:none;
        padding-left: 4px;
        border: 1px solid black;
        padding-top: 24px;
        padding-bottom: 24px;
        margin-top: 8px;
        margin-bottom: 2px;
    }
    
    


`


}



module.exports = generateCSS;