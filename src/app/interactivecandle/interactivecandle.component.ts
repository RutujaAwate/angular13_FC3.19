import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactivecandle',
  templateUrl: './interactivecandle.component.html',
  styleUrls: ['./interactivecandle.component.css']
})
export class InteractivecandleComponent implements OnInit {
  data:any;

  constructor() {
    this.data = {
      chart: {
        caption: "Ripple (XRP) Price",
        subcaption: "Q4-2017",
        numberprefix: "$",
        pyaxisname: "Price (USD)",
        theme: "fusion",
        showvolumechart: "0"
      },
      categories: [
        {
          category: [
            {
              label: "Oct",
              x: "1"
            },
            {
              label: "Nov",
              x: "32"
            },
            {
              label: "Dec",
              x: "62"
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              tooltext:
                "<b>Oct 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.197622,
              high: 0.207185,
              low: 0.19617,
              close: 0.206532,
              volume: "51345500",
              x: 1
            },
            {
              tooltext:
                "<b>Oct 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.206077,
              high: 0.206556,
              low: 0.199444,
              close: 0.202676,
              volume: "77412300",
              x: 2
            },
            {
              tooltext:
                "<b>Oct 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.203209,
              high: 0.204808,
              low: 0.19873,
              close: 0.203318,
              volume: "48703100",
              x: 3
            },
            {
              tooltext:
                "<b>Oct 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.203218,
              high: 0.217024,
              low: 0.202647,
              close: 0.214774,
              volume: "123573000",
              x: 4
            },
            {
              tooltext:
                "<b>Oct 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.215583,
              high: 0.241023,
              low: 0.215583,
              close: 0.237016,
              volume: "404299000",
              x: 5
            },
            {
              tooltext:
                "<b>Oct 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.237726,
              high: 0.242424,
              low: 0.233533,
              close: 0.234039,
              volume: "167492000",
              x: 6
            },
            {
              tooltext:
                "<b>Oct 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.233963,
              high: 0.239336,
              low: 0.233478,
              close: 0.23861,
              volume: "77950200",
              x: 7
            },
            {
              tooltext:
                "<b>Oct 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.238312,
              high: 0.279944,
              low: 0.237532,
              close: 0.279944,
              volume: "529838000",
              x: 8
            },
            {
              tooltext:
                "<b>Oct 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.278758,
              high: 0.278758,
              low: 0.24043,
              close: 0.251825,
              volume: "610110000",
              x: 9
            },
            {
              tooltext:
                "<b>Oct 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.252825,
              high: 0.26656,
              low: 0.241193,
              close: 0.260733,
              volume: "384049000",
              x: 10
            },
            {
              tooltext:
                "<b>Oct 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.260658,
              high: 0.267843,
              low: 0.25908,
              close: 0.264439,
              volume: "161206000",
              x: 11
            },
            {
              tooltext:
                "<b>Oct 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.265046,
              high: 0.267468,
              low: 0.248414,
              close: 0.248414,
              volume: "245004000",
              x: 12
            },
            {
              tooltext:
                "<b>Oct 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.248285,
              high: 0.26425,
              low: 0.238867,
              close: 0.260489,
              volume: "398689000",
              x: 13
            },
            {
              tooltext:
                "<b>Oct 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.26115,
              high: 0.267721,
              low: 0.25732,
              close: 0.25732,
              volume: "211160000",
              x: 14
            },
            {
              tooltext:
                "<b>Oct 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.257537,
              high: 0.268419,
              low: 0.249048,
              close: 0.263983,
              volume: "280211000",
              x: 15
            },
            {
              tooltext:
                "<b>Oct 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.263386,
              high: 0.291359,
              low: 0.24901,
              close: 0.256232,
              volume: "963158000",
              x: 16
            },
            {
              tooltext:
                "<b>Oct 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.256098,
              high: 0.263147,
              low: 0.222939,
              close: 0.232064,
              volume: "411265000",
              x: 17
            },
            {
              tooltext:
                "<b>Oct 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.231216,
              high: 0.23815,
              low: 0.207265,
              close: 0.21852,
              volume: "354225000",
              x: 18
            },
            {
              tooltext:
                "<b>Oct 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.218229,
              high: 0.23179,
              low: 0.208317,
              close: 0.21515,
              volume: "304542000",
              x: 19
            },
            {
              tooltext:
                "<b>Oct 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.215086,
              high: 0.223822,
              low: 0.208754,
              close: 0.210549,
              volume: "182704000",
              x: 20
            },
            {
              tooltext:
                "<b>Oct 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.210189,
              high: 0.212381,
              low: 0.200774,
              close: 0.211016,
              volume: "116807000",
              x: 21
            },
            {
              tooltext:
                "<b>Oct 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.210958,
              high: 0.211901,
              low: 0.200722,
              close: 0.204177,
              volume: "75849500",
              x: 22
            },
            {
              tooltext:
                "<b>Oct 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.203504,
              high: 0.203919,
              low: 0.190729,
              close: 0.196928,
              volume: "99914800",
              x: 23
            },
            {
              tooltext:
                "<b>Oct 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.195567,
              high: 0.217508,
              low: 0.190455,
              close: 0.206644,
              volume: "220081000",
              x: 24
            },
            {
              tooltext:
                "<b>Oct 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.207113,
              high: 0.208237,
              low: 0.201803,
              close: 0.204604,
              volume: "75017500",
              x: 25
            },
            {
              tooltext:
                "<b>Oct 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.204444,
              high: 0.206289,
              low: 0.20266,
              close: 0.203628,
              volume: "38193100",
              x: 26
            },
            {
              tooltext:
                "<b>Oct 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.203668,
              high: 0.204492,
              low: 0.201771,
              close: 0.202785,
              volume: "29623000",
              x: 27
            },
            {
              tooltext:
                "<b>Oct 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.202592,
              high: 0.203476,
              low: 0.201401,
              close: 0.201835,
              volume: "26864900",
              x: 28
            },
            {
              tooltext:
                "<b>Oct 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.201358,
              high: 0.205209,
              low: 0.200075,
              close: 0.202785,
              volume: "62511100",
              x: 29
            },
            {
              tooltext:
                "<b>Oct 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.203076,
              high: 0.204135,
              low: 0.201946,
              close: 0.202711,
              volume: "34835100",
              x: 30
            },
            {
              tooltext:
                "<b>Oct 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.202405,
              high: 0.203778,
              low: 0.200461,
              close: 0.200558,
              volume: "43875700",
              x: 31
            },
            {
              tooltext:
                "<b>Nov 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.200247,
              high: 0.201501,
              low: 0.193613,
              close: 0.194124,
              volume: "67921000",
              x: 32
            },
            {
              tooltext:
                "<b>Nov 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.194596,
              high: 0.211848,
              low: 0.183815,
              close: 0.205861,
              volume: "197770000",
              x: 33
            },
            {
              tooltext:
                "<b>Nov 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.206205,
              high: 0.228026,
              low: 0.201728,
              close: 0.208133,
              volume: "373402000",
              x: 34
            },
            {
              tooltext:
                "<b>Nov 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.208083,
              high: 0.208479,
              low: 0.202133,
              close: 0.20375,
              volume: "74013200",
              x: 35
            },
            {
              tooltext:
                "<b>Nov 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.203274,
              high: 0.205124,
              low: 0.201117,
              close: 0.202055,
              volume: "46959000",
              x: 36
            },
            {
              tooltext:
                "<b>Nov 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.201967,
              high: 0.208662,
              low: 0.20141,
              close: 0.20599,
              volume: "102233000",
              x: 37
            },
            {
              tooltext:
                "<b>Nov 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.205103,
              high: 0.211375,
              low: 0.203978,
              close: 0.210354,
              volume: "114073000",
              x: 38
            },
            {
              tooltext:
                "<b>Nov 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.210675,
              high: 0.221458,
              low: 0.20806,
              close: 0.217437,
              volume: "156959000",
              x: 39
            },
            {
              tooltext:
                "<b>Nov 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.217911,
              high: 0.221791,
              low: 0.214866,
              close: 0.217488,
              volume: "147917000",
              x: 40
            },
            {
              tooltext:
                "<b>Nov 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.218256,
              high: 0.219068,
              low: 0.20526,
              close: 0.206483,
              volume: "141033000",
              x: 41
            },
            {
              tooltext:
                "<b>Nov 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.205948,
              high: 0.214456,
              low: 0.205459,
              close: 0.21043,
              volume: "134503000",
              x: 42
            },
            {
              tooltext:
                "<b>Nov 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.210214,
              high: 0.210214,
              low: 0.195389,
              close: 0.197339,
              volume: "251175000",
              x: 43
            },
            {
              tooltext:
                "<b>Nov 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.197472,
              high: 0.204081,
              low: 0.197456,
              close: 0.203442,
              volume: "132567000",
              x: 44
            },
            {
              tooltext:
                "<b>Nov 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.203679,
              high: 0.213693,
              low: 0.203679,
              close: 0.209825,
              volume: "127361000",
              x: 45
            },
            {
              tooltext:
                "<b>Nov 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.208937,
              high: 0.213105,
              low: 0.208058,
              close: 0.212956,
              volume: "100294000",
              x: 46
            },
            {
              tooltext:
                "<b>Nov 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.212655,
              high: 0.27179,
              low: 0.209287,
              close: 0.227107,
              volume: "1022580000",
              x: 47
            },
            {
              tooltext:
                "<b>Nov 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.224768,
              high: 0.239409,
              low: 0.220273,
              close: 0.226581,
              volume: "397071000",
              x: 48
            },
            {
              tooltext:
                "<b>Nov 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.226547,
              high: 0.230399,
              low: 0.222399,
              close: 0.228627,
              volume: "144298000",
              x: 49
            },
            {
              tooltext:
                "<b>Nov 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.22814,
              high: 0.236231,
              low: 0.226037,
              close: 0.231016,
              volume: "193808000",
              x: 50
            },
            {
              tooltext:
                "<b>Nov 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.231336,
              high: 0.24343,
              low: 0.230917,
              close: 0.238759,
              volume: "214663000",
              x: 51
            },
            {
              tooltext:
                "<b>Nov 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.237978,
              high: 0.240974,
              low: 0.2272,
              close: 0.233271,
              volume: "217851000",
              x: 52
            },
            {
              tooltext:
                "<b>Nov 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.232642,
              high: 0.240848,
              low: 0.232317,
              close: 0.238859,
              volume: "167078000",
              x: 53
            },
            {
              tooltext:
                "<b>Nov 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.238991,
              high: 0.250096,
              low: 0.237304,
              close: 0.242402,
              volume: "240685000",
              x: 54
            },
            {
              tooltext:
                "<b>Nov 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.242851,
              high: 0.245388,
              low: 0.238421,
              close: 0.244642,
              volume: "211486000",
              x: 55
            },
            {
              tooltext:
                "<b>Nov 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.244178,
              high: 0.2557,
              low: 0.243584,
              close: 0.252393,
              volume: "212593000",
              x: 56
            },
            {
              tooltext:
                "<b>Nov 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.252914,
              high: 0.252914,
              low: 0.248589,
              close: 0.248818,
              volume: "133297000",
              x: 57
            },
            {
              tooltext:
                "<b>Nov 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.248305,
              high: 0.254733,
              low: 0.247861,
              close: 0.253927,
              volume: "196735000",
              x: 58
            },
            {
              tooltext:
                "<b>Nov 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.254037,
              high: 0.301084,
              low: 0.253415,
              close: 0.299152,
              volume: "720743000",
              x: 59
            },
            {
              tooltext:
                "<b>Nov 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.297867,
              high: 0.297867,
              low: 0.239409,
              close: 0.243064,
              volume: "541178000",
              x: 60
            },
            {
              tooltext:
                "<b>Nov 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.246433,
              high: 0.261524,
              low: 0.229586,
              close: 0.250878,
              volume: "270907000",
              x: 61
            },
            {
              tooltext:
                "<b>Dec 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.250352,
              high: 0.258828,
              low: 0.239438,
              close: 0.255699,
              volume: "182992000",
              x: 62
            },
            {
              tooltext:
                "<b>Dec 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.255656,
              high: 0.259218,
              low: 0.250756,
              close: 0.255492,
              volume: "118250000",
              x: 63
            },
            {
              tooltext:
                "<b>Dec 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.25553,
              high: 0.263072,
              low: 0.247391,
              close: 0.252558,
              volume: "134710000",
              x: 64
            },
            {
              tooltext:
                "<b>Dec 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.252919,
              high: 0.255362,
              low: 0.24716,
              close: 0.253571,
              volume: "104650000",
              x: 65
            },
            {
              tooltext:
                "<b>Dec 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.253598,
              high: 0.253988,
              low: 0.245234,
              close: 0.246101,
              volume: "174591000",
              x: 66
            },
            {
              tooltext:
                "<b>Dec 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.245416,
              high: 0.245705,
              low: 0.227742,
              close: 0.232544,
              volume: "274526000",
              x: 67
            },
            {
              tooltext:
                "<b>Dec 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.232623,
              high: 0.23376,
              low: 0.22134,
              close: 0.222823,
              volume: "275205000",
              x: 68
            },
            {
              tooltext:
                "<b>Dec 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.223636,
              high: 0.278673,
              low: 0.222168,
              close: 0.252125,
              volume: "660172000",
              x: 69
            },
            {
              tooltext:
                "<b>Dec 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.252162,
              high: 0.255684,
              low: 0.240073,
              close: 0.244708,
              volume: "205289000",
              x: 70
            },
            {
              tooltext:
                "<b>Dec 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.245548,
              high: 0.245548,
              low: 0.229304,
              close: 0.237333,
              volume: "198174000",
              x: 71
            },
            {
              tooltext:
                "<b>Dec 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.236574,
              high: 0.252777,
              low: 0.235804,
              close: 0.251691,
              volume: "176101000",
              x: 72
            },
            {
              tooltext:
                "<b>Dec 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.252258,
              high: 0.434102,
              low: 0.250961,
              close: 0.373541,
              volume: "1555040000",
              x: 73
            },
            {
              tooltext:
                "<b>Dec 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.372689,
              high: 0.513768,
              low: 0.342964,
              close: 0.471063,
              volume: "2738760000",
              x: 74
            },
            {
              tooltext:
                "<b>Dec 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.470648,
              high: 0.892267,
              low: 0.466401,
              close: 0.864263,
              volume: "6358700000",
              x: 75
            },
            {
              tooltext:
                "<b>Dec 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.86176,
              high: 0.86176,
              low: 0.666114,
              close: 0.756181,
              volume: "3194210000",
              x: 76
            },
            {
              tooltext:
                "<b>Dec 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.755493,
              high: 0.815923,
              low: 0.741667,
              close: 0.758642,
              volume: "1334770000",
              x: 77
            },
            {
              tooltext:
                "<b>Dec 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.754125,
              high: 0.765981,
              low: 0.719929,
              close: 0.728366,
              volume: "805200000",
              x: 78
            },
            {
              tooltext:
                "<b>Dec 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.728036,
              high: 0.792014,
              low: 0.689323,
              close: 0.778407,
              volume: "1342720000",
              x: 79
            },
            {
              tooltext:
                "<b>Dec 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.777447,
              high: 0.863536,
              low: 0.756724,
              close: 0.791257,
              volume: "1449670000",
              x: 80
            },
            {
              tooltext:
                "<b>Dec 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.787171,
              high: 0.789044,
              low: 0.730953,
              close: 0.775964,
              volume: "1007420000",
              x: 81
            },
            {
              tooltext:
                "<b>Dec 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 0.782515,
              high: 1.24,
              low: 0.782515,
              close: 1.19,
              volume: "3626110000",
              x: 82
            },
            {
              tooltext:
                "<b>Dec 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.17,
              high: 1.38,
              low: 0.741013,
              close: 1.14,
              volume: "4644700000",
              x: 83
            },
            {
              tooltext:
                "<b>Dec 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.17,
              high: 1.21,
              low: 1.08,
              close: 1.17,
              volume: "1497590000",
              x: 84
            },
            {
              tooltext:
                "<b>Dec 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.18,
              high: 1.18,
              low: 0.911226,
              close: 1.04,
              volume: "754959000",
              x: 85
            },
            {
              tooltext:
                "<b>Dec 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.05,
              high: 1.13,
              low: 1,
              close: 1.12,
              volume: "686014000",
              x: 86
            },
            {
              tooltext:
                "<b>Dec 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.12,
              high: 1.19,
              low: 1.09,
              close: 1.19,
              volume: "938847000",
              x: 87
            },
            {
              tooltext:
                "<b>Dec 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.18,
              high: 1.47,
              low: 1.18,
              close: 1.4,
              volume: "2854260000",
              x: 88
            },
            {
              tooltext:
                "<b>Dec 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.39,
              high: 1.5,
              low: 1.26,
              close: 1.43,
              volume: "2843300000",
              x: 89
            },
            {
              tooltext:
                "<b>Dec 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 1.44,
              high: 2.27,
              low: 1.44,
              close: 2.21,
              volume: "7545740000",
              x: 90
            },
            {
              tooltext:
                "<b>Dec 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 2.2,
              high: 2.85,
              low: 2.04,
              close: 2.16,
              volume: "8108390000",
              x: 91
            },
            {
              tooltext:
                "<b>Dec 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
              open: 2.1,
              high: 2.39,
              low: 1.87,
              close: 2.3,
              volume: "4642080000",
              x: 92
            }
          ]
        }
      ]
    };
   }

  ngOnInit(): void {
  }

}
