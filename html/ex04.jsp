<%@ page language="java" contentType="text/html;
 charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>html/ex04.jsp</title>
    </head>

    <body>
        <% 
        String userId=request.getParameter("user_id");
        String userBir=request.getParameter("user_bir");
        String userSex=request.getParameter("user_sex");
        String userEmail=request.getParameter("user_eMail");
        String mailCheck=request.getParameter("mail_check");
        String userPhone=request.getParameter("user_phone");
        String phoneNum=request.getParameter("phone_num");
        String phoneNum2=request.getParameter("phone_num2");
        String userJob=request.getParameter("user_job");
        %>
        <h3>아이디: <%=userId%></h3>
        <h3>생년월일: <%=userBir%></h3>
        <h3>성별: <%=userSex%></h3>
        <h3>E-mail: <%=userEmail%></h3>
        <h3>메일수신: <%=mailCheck%></h3>
        <h3>핸드폰: <%=userPhone%><%=phoneNum%><%=phoneNum2%></h3>
        <h3>직업: <%=userJob%></h3>
        <%
            String[] userHobby=request.getParameterValues("hobby");
        %>
        <%
            for(String user : userHobby) {
        %>
        <h3>취미: <%=user%></h3>
        <%         
            }
        %>
        <%
        String userIntro=request.getParameter("user_intro");
        %>
        <h3>자기소개: <%=userIntro%></h3>
    </body>

    </html>