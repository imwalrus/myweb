<%@ page language="java" contentType="text/html;
 charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>html/radio.jsp</title>
    </head>

    <body>
        <%
            String userSex=request.getParameter("sex");
            String userGrade=request.getParameter("year");
        %>
        <h1>성별: <%=userSex%></h1>
        <h1>학년: <%=userGrade%></h1>
        <%
            String[] userSubject=request.getParameterValues("subject");
        %>
        <%
            for(String user : userSubject) {
        %>
        <h1><%=user%></h1>
        <%
            }
        %>
    </body>

    </html>