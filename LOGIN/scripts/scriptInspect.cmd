curl -X post "http://localhost:8080/login?username=gonzi&password=1234"

artillery quick --count 10 -n 50 "http://localhost:8080/login?username=gonzi&password=1234" >     result_bloq.txt 

