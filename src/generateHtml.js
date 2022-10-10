// TODO: Create a function to generate markdown for README
function generateHtml({mname, role, mid, memail, moffice, ename, eid, eemail, team, github, iname, iid, iemail, school}) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./node_modules/@fortawesome/fontawesome-free/css/all.min.css" />
    <title>Our Team</title>
</head>
<body>

    <header>
        <h1 class="text-center bg-primary bg-gradient text-white py-3">Our Team</h1>
    </header>

    <div id="theTeam" class="container-fluid col-sm-8">

        <div id="manager" class="row">
            <div class="col-12 bg-danger">
                <h3 id="managerName">${mname} <i class="fa-solid fa-cloud"></i></h3>
                <p>ID: <span id="managerId">${mid}</span></p>
                <p>Email: <span id="managerEmail">${memail}</span></p>
                <p>Office Number: <span id="managerOffice">${moffice}</span></p>
            </div>
        </div>

        <div id="engineer" class="row">
            <div class="col-12 bg-danger">
                <h3 id="engineerName">${ename} <i class="fa-solid fa-cloud"></i></h3>
                <p>ID: <span id="engineerId">${eid}</span></p>
                <p>Email: <span id="engineerEmail">${eemail}</span></p>
                <p>GitHub: <span id="engineerGit">${github}</span></p>
            </div>
        </div>

        <div id="intern" class="row">
            <div class="col-12 bg-danger">
                <h3 id="internName">${iname} <i class="fa-solid fa-cloud"></i></h3>
                <p>ID: <span id="internId">${iid}</span></p>
                <p>Email: <span id="internEmail">${iemail}</span></p>
                <p>School: <span id="internSchool">${school}</span></p>
            </div>
        </div>

    </div>
    
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>
  `;
  }
  
  module.exports = generateHtml;