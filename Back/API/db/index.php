<? 
    class connectClass{
        var $conn;

        public function openConnect(){
            $serverName = 'db:3306';
            $userName = 'root';
            $password = '1q2w3e4r5t';
            $dbname = 'DB_Crm';

            $this -> conn = new mysqli($serverName,$userName,$password,$dbname);
                if($this -> conn -> connect_error){
                    die('Connection failed: ' . $this -> conn -> connect_error);
                }
            
        }
        public function getConn(){
            return $this -> conn;
        }
    }