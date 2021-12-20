<?php
function generatePlaylist ($dir)
{
// Basisfunctionaliteit voor een JSON-achtige playlist

$return_array = array();

if(is_dir($dir)){

    if($dh = opendir($dir)){
        while(($file = readdir($dh)) != false){

            if($file == "." or $file == ".." or $file =="playlist.json"){

            } else {
                $return_array[] = $file; // Add the file to the array
            }
        }
    }

    $ds ="/";
    $savePath=$dir . $ds ."playlist.json";
    $fileContent= json_encode($return_array);

    $file = fopen($savePath,"w");
    fwrite($file,$fileContent);
    fclose($file);

}

}


?>