img="";
status_="";
object="";

function setup()
{
    canvas = createCanvas(750,650);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("model loaded");
    status_=true;
    objectDetector.detect(img,gotresult);
}

function gotresult(error,result)
{
  if(error)
  {
      console.log(error);
  }
    console.log(result);
    object= result;
}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
    image(img,0,0,750,650);
    if(status_ != "")
    {
      for(i= 0; i < object.length; i++)
      {
          document.getElementById("status").innerHTML = "Status: Detecting Objects";

          fill("#00008B");
          percent = floor(object[i].confidence*100);
          text(object[i].label, object[i].x,object[i].y);
          noFill();
          stroke("#DC143C");
          rect(object[i].x , object[i].y , object[i].width , object[i].height);
      }
    }
}