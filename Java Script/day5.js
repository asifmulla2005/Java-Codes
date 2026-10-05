document.write("<br>1 : January");
document.write("<br>2 : February");
document.write("<br>3 : March");
document.write("<br>4 : April");
document.write("<br>5 : May");
document.write("<br>6 : June");
document.write("<br>7 : July");
document.write("<br>8 : August");
document.write("<br>9 : September");
document.write("<br>10 : October");
document.write("<br>11 : November");
document.write("<br>12 : December");

let month = parseInt(prompt("Enter the Month :"))
switch(month)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write("<br>The month has 31 days");
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        document.write("<br>The month has 30 days");

    case 2:
        let year = parseInt(prompt("Enter the Year : "));
        if((year % 4 === 0 && year % 400 === 0) || year %100 != 0)
        {
            document.write("<br>The month has 29 days");
        }
        else
        {
            document.write("<br>The month has 28 days");
        }
        break;
    default:
        document.write("<br>Please select a valid Month");
}