<?php
  
function customTanggal($date,$date_format){
    return \Carbon\Carbon::createFromFormat('Y-m-d', $date)->format($date_format);    
}
   
function customImagePath($image_name)
{
    return public_path('images/users/'.$image_name);
}