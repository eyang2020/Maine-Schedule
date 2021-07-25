function showTime(){

    var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    h = objToday.getHours();
    m = objToday.getMinutes();
    s = objToday.getSeconds();
    var session = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

	function timeLeft(endHour, endMinute, periodName, endTime, type) {

		var dateEndTime = new Date(1000, 0, 1, endHour, endMinute);
		var dateRightNow = new Date();
		dateRightNow.setFullYear(1000, 0, 1);

		timeDiff = dateEndTime - dateRightNow;
		minutesApart = Math.floor((timeDiff/1000)/60);

		if(type == "untilEnd") {

								if(minutesApart <= 0) {
									document.getElementById("minutesleft").innerText = "";
									document.getElementById("minutesleft").textContent = "";
									// change test below
									document.getElementById("untilstart").innerText = "";
									document.getElementById("untilstart").textContent = "";
									// end of change
								}
								else if(minutesApart == 1) {
									document.getElementById("minutesleft").innerText = minutesApart + " " + "minute until " + periodName + " " + "ends " + "(" + endTime + ")";
									document.getElementById("minutesleft").textContent = minutesApart + " " + "minute until " + periodName + " " + "ends " + "(" + endTime + ")";
								}
								else {
									document.getElementById("minutesleft").innerText = minutesApart + " " + "minutes until " + periodName + " " + "ends " + "(" + endTime + ")";
									document.getElementById("minutesleft").textContent = minutesApart + " " + "minutes until " + periodName + " " + "ends " + "(" + endTime + ")";
								}

							}
							else if(type == "untilStart") {

								if(minutesApart <= 0) {
									document.getElementById("untilstart").innerText = "";
									document.getElementById("untilstart").textContent = "";
									// change test below
									document.getElementById("minutesleft").innerText = "";
									document.getElementById("minutesleft").textContent = "";
									// end of change
								}
								else if(minutesApart == 1) {
									document.getElementById("untilstart").innerText = minutesApart + " " + "minute until " + periodName + " " + "starts " + "(" + endTime + ")";
									document.getElementById("untilstart").textContent = minutesApart + " " + "minute until " + periodName + " " + "starts " + "(" + endTime + ")";
								}
								else {
									document.getElementById("untilstart").innerText = minutesApart + " " + "minutes until " + periodName + " " + "starts " + "(" + endTime + ")";
									document.getElementById("untilstart").textContent = minutesApart + " " + "minutes until " + periodName + " " + "starts " + "(" + endTime + ")";
								}

							}

						}

						mHours = objToday.getHours();
						mMinutes = objToday.getMinutes();
						mSeconds = objToday.getSeconds();

						var mHours = objToday.getHours();
						var time = mHours + ":" + m + "." + s;
						var displayTime = h + ":" + m + "." + s + " " + session;
						var today = dayOfWeek + "," + " " + curMonth + " " + dayOfMonth + "," + " " + curYear;

                        document.getElementById("ClockDisplay").innerText = today;
						document.getElementById("ClockDisplay").textContent = today;
						document.getElementById("date").innerText = displayTime;
						document.getElementById("date").textContent = displayTime;

						setTimeout(showTime, 1000);

						if(dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
							document.getElementById("period").innerText = "No School";
							document.getElementById("period").textContent = "No School";
							document.getElementById("minutesleft").innerText = "Enjoy your weekend :)";
						}
						else if(dayOfWeek == "Monday" || dayOfWeek == "Friday") {
							if(time >= "8:05.00" && time < "8:55.00") {
								document.getElementById("period").innerText = "Period 1";
								document.getElementById("period").textContent = "Period 1";
								timeLeft(8, 56, "Period 1", "8:55 AM", "untilEnd");
								timeLeft(9, 1, "Period 2", "9:00 AM", "untilStart");
							}
							else if(time >= "8:55.00" && time < "9:00.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(9, 1, "Period 2", "9:00 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "9:00.00" && time < "9:50.00") {
								document.getElementById("period").innerText = "Period 2";
								document.getElementById("period").textContent = "Period 2";
								timeLeft(9, 51, "Period 2", "9:50 AM", "untilEnd");
								timeLeft(9, 56, "3A", "9:55 AM", "untilStart");
							}
							else if(time >= "9:50.00" && time < "9:55.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(9, 56, "3A", "9:55 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "9:55.00" && time < "10:17.00") {
								document.getElementById("period").innerText = "Period 3A";
								document.getElementById("period").textContent = "Period 3A";
								timeLeft(10, 18, "3A", "10:17 AM", "untilEnd");
								timeLeft(10, 23, "3B", "10:22 AM", "untilStart");
							}
							else if(time >= "10:17.00" && time < "10:22.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(10, 23, "3B", "10:22 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "10:22.00" && time < "10:45.00") {
								document.getElementById("period").innerText = "Period 3B";
								document.getElementById("period").textContent = "Period 3B";
								timeLeft(10, 46, "3B", "10:45 AM", "untilEnd");
								timeLeft(10, 51, "4A", "10:50 AM", "untilStart");
							}
							else if(time >= "10:45.00" && time < "10:50.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(10, 51, "3B", "10:50 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "10:50.00" && time < "11:12.00") {
								document.getElementById("period").innerText = "Period 4A";
								document.getElementById("period").textContent = "Period 4A";
								timeLeft(11, 13, "4A", "11:12 AM", "untilEnd");
								timeLeft(11, 18, "4B", "11:17 PM", "untilStart");
							}
							else if(time >= "11:12.00" && time < "11:17.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(11, 18, "4B", "11:17 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "11:17.00" && time < "11:40.00") {
								document.getElementById("period").innerText = "Period 4B";
								document.getElementById("period").textContent = "Period 4B";
								timeLeft(11, 41, "4B", "11:40 AM", "untilEnd");
								timeLeft(11, 46, "5A", "11:45 AM", "untilStart");
							}
							else if(time >= "11:17.00" && time < "11:45.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(11, 46, "5A", "11:45 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "11:45.00" && time < "12:07.00") {
								document.getElementById("period").innerText = "Period 5A";
								document.getElementById("period").textContent = "Period 5A";
								timeLeft(12, 8, "5A", "12:07 PM", "untilEnd");
								timeLeft(12, 13, "5B", "12:12 PM", "untilStart");
							}
							else if(time >= "12:07.00" && time < "12:12.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(12, 13, "5B", "12:12 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "12:12.00" && time < "12:35.00") {
								document.getElementById("period").innerText = "Period 5B";
								document.getElementById("period").textContent = "Period 5B";
								timeLeft(12, 36, "5B", "12:35 PM", "untilEnd");
								timeLeft(12, 41, "6A", "12:40 PM", "untilStart");
							}
							else if(time >= "12:35.00" && time < "12:40.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(12, 41, "6A", "12:40 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "12:40.00" && time < "13:02.00") {
								document.getElementById("period").innerText = "Period 6A";
								document.getElementById("period").textContent = "Period 6A";
								timeLeft(13, 3, "6A", "1:02 PM", "untilEnd");
								timeLeft(13, 8, "6B", "1:07 PM", "untilStart");
							}
							else if(time >= "13:02.00" && time < "13:07.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(13, 8, "6B", "1:07 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "13:07.00" && time < "13:30.00") {
								document.getElementById("period").innerText = "Period 6B";
								document.getElementById("period").textContent = "Period 6B";
								timeLeft(13, 31, "6B", "1:30 PM", "untilEnd");
								timeLeft(13, 36, "Period 7", "1:35 PM", "untilStart");
							}
							else if(time >= "13:30.00" && time < "13:35.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(13, 36, "Period 7", "1:35 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "13:35.00" && time < "14:25.00") {
								document.getElementById("period").innerText = "Period 7";
								document.getElementById("period").textContent = "Period 7";
								timeLeft(14, 26, "Period 7", "2:25 PM", "untilEnd");
								timeLeft(14, 31, "Period 8", "2:30 PM", "untilStart");
							}
							else if(time >= "14:25.00" && time < "14:30.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(14, 31, "Period 8", "2:30 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "14:30.00" && time < "15:20.00") {
								document.getElementById("period").innerText = "Period 8";
								document.getElementById("period").textContent = "Period 8";
								timeLeft(15, 21, "Period 8", "3:20 PM", "untilEnd");
							}
							else {
								document.getElementById("period").innerText = "No School";
								document.getElementById("period").textContent = "No School";
								document.getElementById("minutesleft").innerText = "Enjoy the rest of your day :)";
							}
						}
						else if(dayOfWeek == "Tuesday") {
							if(time >= "8:05.00" && time < "9:41.00") {
								document.getElementById("period").innerText = "Period 1";
								document.getElementById("period").textContent = "Period 1";
								timeLeft(9, 42, "Period 1", "9:41 AM", "untilEnd");
								timeLeft(9, 50, "3X", "9:49 AM", "untilStart");
							}
							else if(time >= "9:41.00" && time < "9:49.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(9, 50, "3X", "9:49 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "9:49.00" && time < "10:31.00") {
								document.getElementById("period").innerText = "Period 3X";
								document.getElementById("period").textContent = "Period 3X";
								timeLeft(10, 32, "3X", "10:31 AM", "untilEnd");
								timeLeft(10, 37, "3Y", "10:36 AM", "untilStart");
							}
							else if(time >= "10:31.00" && time < "10:36.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(10, 37, "3Y", "10:36 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "10:36.00" && time < "11:19.00") {
								document.getElementById("period").innerText = "Period 3Y";
								document.getElementById("period").textContent = "Period 3Y";
								timeLeft(11, 20, "3Y", "11:19 AM", "untilEnd");
								timeLeft(11, 28, "5X", "11:27 AM", "untilStart");
							}
							else if(time >= "11:19.00" && time < "11:27.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(11, 28, "5X", "11:27 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "11:27.00" && time < "12:12.00") {
								document.getElementById("period").innerText = "Period 5X";
								document.getElementById("period").textContent = "Period 5X";
								timeLeft(12, 13, "5X", "12:12 PM", "untilEnd");
								timeLeft(12, 13, "5Y", "12:12 PM", "untilStart");
							}
							else if(time >= "12:12.00" && time < "12:57.00") {
								document.getElementById("period").innerText = "Period 5Y";
								document.getElementById("period").textContent = "Period 5Y";
								timeLeft(12, 58, "5Y", "12:57 PM", "untilEnd");
								timeLeft(12, 58, "5Z", "12:57 PM", "untilStart");
							}
							else if(time >= "12:57.00" && time < "13:42.00") {
								document.getElementById("period").innerText = "Period 5Z";
								document.getElementById("period").textContent = "Period 5Z";
								timeLeft(13, 43, "5Z", "1:42 PM", "untilEnd");
								timeLeft(13, 51, "Period 7", "1:50 PM", "untilStart");
							}
							else if(time >= "13:42.00" && time < "13:50.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(13, 51, "Period 7", "1:50 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "13:50.00" && time < "15:20.00") {
								document.getElementById("period").innerText = "Period 7";
								document.getElementById("period").textContent = "Period 7";
								timeLeft(15, 21, "Period 7", "3:20 PM", "untilEnd");
							}
							else {
								document.getElementById("period").innerText = "No School";
								document.getElementById("period").textContent = "No School";
								document.getElementById("minutesleft").innerText = "Enjoy the rest of your day :)";
							}
						}
						else if(dayOfWeek == "Wednesday") {
							if(time >= "8:05.00" && time < "9:41.00") {
								document.getElementById("period").innerText = "Period 2";
								document.getElementById("period").textContent = "Period 2";
								timeLeft(9, 42, "Period 2", "9:41 AM", "untilEnd");
								timeLeft(9, 50, "2X", "9:49 AM", "untilStart");
							}
							else if(time >= "9:41.00" && time < "9:49.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(9, 50, "4X", "9:49 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "9:49.00" && time < "10:31.00") {
								document.getElementById("period").innerText = "Period 4X";
								document.getElementById("period").textContent = "Period 4X";
								timeLeft(10, 32, "4X", "10:31 AM", "untilEnd");
								timeLeft(10, 37, "4Y", "10:36 AM", "untilStart");
							}
							else if(time >= "10:31.00" && time < "10:36.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(10, 37, "4Y", "10:36 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "10:36.00" && time < "11:19.00") {
								document.getElementById("period").innerText = "Period 4Y";
								document.getElementById("period").textContent = "Period 4Y";
								timeLeft(11, 20, "4Y", "11:19 AM", "untilEnd");
								timeLeft(11, 28, "6X", "11:27 AM", "untilStart");
							}
							else if(time >= "11:19.00" && time < "11:27.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(11, 28, "6X", "11:27 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "11:27.00" && time < "12:12.00") {
								document.getElementById("period").innerText = "Period 6X";
								document.getElementById("period").textContent = "Period 6X";
								timeLeft(12, 13, "6X", "12:12 PM", "untilEnd");
								timeLeft(12, 13, "6Y", "12:12 PM", "untilStart");
							}
							else if(time >= "12:12.00" && time < "12:57.00") {
								document.getElementById("period").innerText = "Period 6Y";
								document.getElementById("period").textContent = "Period 6Y";
								timeLeft(12, 58, "6Y", "12:57 PM", "untilEnd");
								timeLeft(12, 58, "6Z", "12:57 PM", "untilStart");
							}
							else if(time >= "12:57.00" && time < "13:42.00") {
								document.getElementById("period").innerText = "Period 6Z";
								document.getElementById("period").textContent = "Period 6Z";
								timeLeft(13, 43, "6Z", "1:42 PM", "untilEnd");
								timeLeft(13, 51, "Period 7", "1:50 PM", "untilStart");
							}
							else if(time >= "13:42.00" && time < "13:50.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(13, 51, "Period 8", "1:50 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "13:50.00" && time < "15:20.00") {
								document.getElementById("period").innerText = "Period 8";
								document.getElementById("period").textContent = "Period 8";
								timeLeft(15, 21, "Period 8", "3:20 PM", "untilEnd");
							}
							else {
								document.getElementById("period").innerText = "No School";
								document.getElementById("period").textContent = "No School";
								document.getElementById("minutesleft").innerText = "Late start tomorrow (8:45 AM)";
							}

						}

						else if(dayOfWeek == "Thursday") {
							if(time >= "8:45.00" && time < "9:30.00") {
								document.getElementById("period").innerText = "Period 1";
								document.getElementById("period").textContent = "Period 1";
								timeLeft(9, 31, "Period 1", "9:30 AM", "untilEnd");
								timeLeft(9, 36, "Period 2", "9:35 AM", "untilStart");
							}
							else if(time >= "9:30.00" && time < "9:35.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(9, 36, "Period 2", "9:35 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "9:35.00" && time < "10:20.00") {
								document.getElementById("period").innerText = "Period 2";
								document.getElementById("period").textContent = "Period 2";
								timeLeft(10, 21, "Period 2", "10:20 AM", "untilEnd");
								timeLeft(10, 26, "3A", "10:25 AM", "untilStart");
							}
							else if(time >= "10:20.00" && time < "10:25.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(10, 26, "3A", "10:25 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "10:25.00" && time < "10:45.00") {
								document.getElementById("period").innerText = "Period 3A";
								document.getElementById("period").textContent = "Period 3A";
								timeLeft(10, 46, "3A", "10:45 AM", "untilEnd");
								timeLeft(10, 51, "3B", "10:50 AM", "untilStart");
							}
							else if(time >= "10:45.00" && time < "10:50.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(10, 51, "3B", "10:50 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "10:50.00" && time < "11:10.00") {
								document.getElementById("period").innerText = "Period 3B";
								document.getElementById("period").textContent = "Period 3B";
								timeLeft(11, 11, "3B", "11:10 AM", "untilEnd");
								timeLeft(11, 16, "4A", "11:15 AM", "untilStart");
							}
							else if(time >= "11:10.00" && time < "11:15.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(11, 16, "4A", "11:15 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "11:15.00" && time < "11:35.00") {
								document.getElementById("period").innerText = "Period 4A";
								document.getElementById("period").textContent = "Period 4A";
								timeLeft(11, 36, "4A", "11:35 AM", "untilEnd");
								timeLeft(11, 41, "4B", "11:40 AM", "untilStart");
							}
							else if(time >= "11:35.00" && time < "11:40.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(11, 41, "4B", "11:40 AM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "11:40.00" && time < "12:00.00") {
								document.getElementById("period").innerText = "Period 4B";
								document.getElementById("period").textContent = "Period 4B";
								timeLeft(12, 1, "4B", "12:00 PM", "untilEnd");
								timeLeft(12, 6, "5A", "12:05 PM", "untilStart");
							}
							else if(time >= "12:00.00" && time < "12:05.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(12, 6, "5A", "12:05 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "12:05.00" && time < "12:25.00") {
								document.getElementById("period").innerText = "Period 5A";
								document.getElementById("period").textContent = "Period 5A";
								timeLeft(12, 26, "5A", "12:25 PM", "untilEnd");
								timeLeft(12, 31, "5B", "12:30 PM", "untilStart");
							}
							else if(time >= "12:25.00" && time < "12:30.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(12, 31, "5B", "12:30 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "12:30.00" && time < "12:50.00") {
								document.getElementById("period").innerText = "Period 5B";
								document.getElementById("period").textContent = "Period 5B";
								timeLeft(12, 51, "5B", "12:50 PM", "untilEnd");
								timeLeft(12, 56, "6A", "12:55 PM", "untilStart");
							}
							else if(time >= "12:50.00" && time < "12:55.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(12, 56, "6A", "12:55 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "12:55.00" && time < "13:15.00") {
								document.getElementById("period").innerText = "Period 6A";
								document.getElementById("period").textContent = "Period 6A";
								timeLeft(13, 16, "6A", "1:15 PM", "untilEnd");
								timeLeft(13, 21, "6B", "1:20 PM", "untilStart");
							}
							else if(time >= "13:15.00" && time < "13:20.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(13, 21, "6B", "1:20 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "13:20.00" && time < "13:40.00") {
								document.getElementById("period").innerText = "Period 6B";
								document.getElementById("period").textContent = "Period 6B";
								timeLeft(13, 41, "6B", "1:40 PM", "untilEnd");
								timeLeft(13, 46, "Period 7", "1:45 PM", "untilStart");
							}
							else if(time >= "13:40.00" && time < "13:45.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(13, 46, "Period 7", "1:45 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "13:45.00" && time < "14:30.00") {
								document.getElementById("period").innerText = "Period 7";
								document.getElementById("period").textContent = "Period 7";
								timeLeft(14, 31, "Period 7", "2:30 PM", "untilEnd");
								timeLeft(14, 36, "Period 8", "2:35 PM", "untilStart");
							}
							else if(time >= "14:30.00" && time < "14:35.00") {
								document.getElementById("period").innerText = "Passing Period";
								document.getElementById("period").textContent = "Passing Period";
								timeLeft(14, 36, "Period 8", "2:35 PM", "untilStart");
								document.getElementById("minutesleft").innerText = "";
								document.getElementById("minutesleft").textContent = "";
							}
							else if(time >= "14:35.00" && time < "15:20.00") {
								document.getElementById("period").innerText = "Period 8";
								document.getElementById("period").textContent = "Period 8";
								timeLeft(15, 21, "Period 8", "3:20 PM", "untilEnd");
							}
							else {
								document.getElementById("period").innerText = "No School";
								document.getElementById("period").textContent = "No School";
								document.getElementById("minutesleft").innerText = "Enjoy the rest of your day :)";
							}
						}

					}

					showTime();