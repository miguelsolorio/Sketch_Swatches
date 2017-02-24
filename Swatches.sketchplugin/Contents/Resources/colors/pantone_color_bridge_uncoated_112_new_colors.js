var init_pantone_color_bridge_uncoated_new_colors = function(title) {
    var colors = [
        ["3514 UP", "F3B23B"],
        ["3596 UP", "DBB481"],
        ["3547 UP", "C18F46"],
        ["3588 UP", "EA9344"],
        ["3564 UP", "E78345"],
        ["2428 UP", "D78743"],
        ["2429 UP", "BB6F46"],
        ["2430 UP", "CF9062"],
        ["2431 UP", "D48246"],
        ["2432 UP", "D8824E"],
        ["2433 UP", "C66D46"],
        ["2434 UP", "DF6A55"],
        ["2435 UP", "BA7360"],
        ["2436 UP", "A75349"],
        ["2437 UP", "EFBB92"],
        ["2438 UP", "DFA180"],
        ["2439 UP", "C2836A"],
        ["2440 UP", "BD9B90"],
        ["2441 UP", "A77A6D"],
        ["2442 UP", "A06F68"],
        ["2443 UP", "7E493F"],
        ["3544 UP", "E7BCA7"],
        ["2444 UP", "DDA397"],
        ["3519 UP", "EAA5A2"],
        ["3572 UP", "EAA597"],
        ["2445 UP", "DC878B"],
        ["2446 UP", "D3898F"],
        ["2447 UP", "A67175"],
        ["2448 UP", "D66759"],
        ["3556 UP", "D94E45"],
        ["3516 UP", "DC5C45"],
        ["3546 UP", "CA4046"],
        ["3517 UP", "C54246"],
        ["3523 UP", "784549"],
        ["2449 UP", "60433F"],
        ["3568 UP", "EFC5D1"],
        ["3595 UP", "ECBACB"],
        ["2450 UP", "D04A78"],
        ["3527 UP", "CA4879"],
        ["3582 UP", "C86E8E"],
        ["2451 UP", "B64A6A"],
        ["2452 UP", "C1456B"],
        ["2453 UP", "B797BB"],
        ["3520 UP", "A987B0"],
        ["3559 UP", "885D8D"],
        ["3593 UP", "866998"],
        ["3575 UP", "886D9C"],
        ["3543 UP", "9987B2"],
        ["3515 UP", "714D76"],
        ["3558 UP", "9495BE"],
        ["3555 UP", "674F78"],
        ["3583 UP", "695181"],
        ["3574 UP", "6C5B79"],
        ["3566 UP", "665877"],
        ["3535 UP", "614E79"],
        ["3542 UP", "584B73"],
        ["3506 UP", "5D73A5"],
        ["3590 UP", "666D9C"],
        ["3584 UP", "626285"],
        ["3591 UP", "555583"],
        ["3597 UP", "55597C"],
        ["3581 UP", "4D5173"],
        ["3524 UP", "525266"],
        ["3577 UP", "8BB2CF"],
        ["3545 UP", "01A9D4"],
        ["3551 UP", "0096B6"],
        ["3538 UP", "008AC8"],
        ["3553 UP", "2277AA"],
        ["2454 UP", "3B7290"],
        ["3526 UP", "728288"],
        ["2455 UP", "8CB5AB"],
        ["3533 UP", "86C4B6"],
        ["3534 UP", "00958F"],
        ["2456 UP", "439386"],
        ["3560 UP", "26A49C"],
        ["3557 UP", "177172"],
        ["3541 UP", "00919E"],
        ["2457 UP", "829D92"],
        ["2458 UP", "719888"],
        ["2459 UP", "58A58A"],
        ["2460 UP", "5C9B9A"],
        ["2461 UP", "2F837F"],
        ["2462 UP", "547C76"],
        ["2463 UP", "667873"],
        ["2464 UP", "7CBA75"],
        ["2465 UP", "4A784E"],
        ["3522 UP", "1A895A"],
        ["3536 UP", "008B63"],
        ["3500 UP", "287651"],
        ["3537 UP", "3A6046"],
        ["2466 UP", "415352"],
        ["3570 UP", "B3C948"],
        ["3507 UP", "AFC749"],
        ["3561 UP", "89B74B"],
        ["3501 UP", "6DAC4F"],
        ["3529 UP", "62A951"],
        ["3539 UP", "69A24F"],
        ["3508 UP", "71804A"],
        ["3599 UP", "DBBF82"],
        ["2467 UP", "C1A181"],
        ["2468 UP", "A48571"],
        ["2469 UP", "9D775A"],
        ["2470 UP", "A08F78"],
        ["2471 UP", "AE9B88"],
        ["2472 UP", "72624C"],
        ["2473 UP", "CDC0C3"],
        ["2474 UP", "BDB0A5"],
        ["2475 UP", "A9938C"],
        ["2476 UP", "91837D"],
        ["2477 UP", "83726C"],
        ["2478 UP", "5E4F51"],
        ["2479 UP", "5A524D"]
    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });

};
