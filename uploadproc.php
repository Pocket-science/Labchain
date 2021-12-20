<?php

 
$dirpath = '/var/www/html/uploads/';   //2




if (!file_exists($dirpath)) {
    $old = umask(0);
    mkdir($dirpath, 0777);
    umask($old);
}





if (!empty($_FILES)) {
    $tempFile = $_FILES['file']['tmp_name'];                    
    $targetFile =  $dirpath.$ds . $_FILES['file']['name'];  
//    echo $targetFile; 
    move_uploaded_file($tempFile,$targetFile); 
// create hash
 

    $file = fopen ('/var/www/html/uploads/'.$hash, 'w') or die("can't open file");
    fclose($file);



    } else 
 {                                                           
    $result  = array();
 
    $files = scandir($dirpath);                 //1
    if ( false!==$files ) {
        foreach ( $files as $file ) {
            if ( '.'!=$file && '..'!=$file) {       //2
                $obj['name'] = $file;
                $obj['size'] = filesize($dirpath.$file);
		$obj['path'] = '/var/www/html/uploads/';
                $result[] = $obj;
            }
        }
    }
     
    header('Content-type: text/json');              //3
    header('Content-type: application/json');
    echo json_encode($result);
}






?>     