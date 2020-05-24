<%--
  Created by IntelliJ IDEA.
  User: ato
  Date: 3/19/20
  Time: 4:58 CH
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<%
    request.setAttribute( "contextPath", request.getContextPath() );
%>
<html lang="en" ng-app="main">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <title>hihi</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/Ato/index.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/js/lib/bootstrap/bootstrap.css">
    <script  type="text/javascript" src="${pageContext.request.contextPath}/js/angular-1.7.9/angular.min.js"></script>
    <script  type="text/javascript" src="${pageContext.request.contextPath}/js/angular-1.7.9/angular-route.min.js"></script>
    <script  type="text/javascript" src="${pageContext.request.contextPath}/js/lib/angular-ui-router.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/lib/isotope.pkgd.min.js"></script>


    <script type="text/javascript" src="${pageContext.request.contextPath}/js/Controller/main.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/Service/common.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/Controller/slideLeftController.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/Controller/homeController.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/Controller/resumeController.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/Controller/headerController.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/Controller/anhController.js"></script>
    <link rel="shortcut icon" href="favicon.ico"/>

</head>
<body>

<div ui-view></div>

</body>
</html>
