function check()
{
		
		var usename=document.getElementById("usename").value;
		var pswd=document.getElementById("pswd").value;
	
		if(lengthCheck(usename) && lengthCheck(pswd))
		{
			if(usenameCheck(usename) && passwordCheck(pswd))
			{
				alert("all ok");
				return true;
			}
			else
			{
				alert("all not ok");
				return false;
			}
			return true;
		}
		else
		{
			alert("no field should be empty");
			return false;
		}
}
	
	
	
	
	function usenameCheck(element)
	{
		len=element.length
		if(len>=6 && len<=15)
		{
		var pattern=/^[a-zA-Z][a-zA-Z0-9_]+/;
		if(pattern.test(element))
		{
			alert("ok");
			return true;
		}
		else
		{
			alert("Check password");
			return false;
		}
		}
	}
	function passwordCheck(element)
	{
		len=element.length
		if(len>=6 && len<=32)
		{
		var p1=/^[a-zA-Z]/
		var p2=/[a-z]+/
		var p3=/[A-Z]+/
		var p4=/[0-9]+/
		var p5=/[@!~#\.\$]+/;
			if(p1.test(element) && p2.test(element) && p3.test(element) && p4.test(element) && p5.test(element))
			{
				alert("ok");
				return true;
			}
			else
			{
				alert("not ok");
				return false;
			}
		}
	}
	function lengthCheck(element)
	{
			len=element.length
			if(len!=0)
			{
				return true;
			}
			else
			{
				return false;
			}
	}

