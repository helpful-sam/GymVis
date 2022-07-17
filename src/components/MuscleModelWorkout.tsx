import Tooltip from '@mui/material/Tooltip';

export default function ModelWorkout() {

    // Converts the muscle name the tooltip shows to the name of the relevant
    // class name.
    function tooltipToClass(muscleName: string) {
        switch (muscleName) {
            case "Abdominals":
                return "abdominals";
            case "Biceps":
                return "biceps";
            case "Calves":
                return "calves";
            case "Forearms":
                return "forearms";
            case "Front delts":
                return "front-delts";
            case "Glutes":
                return "glutes";
            case "Hamstrings":
                return "hamstrings";
            case "Hip adductors":
                return "hip-adductors";
            case "Hip flexors":
                return "hip-flexors";
            case "Lats and Teres major":
                return "lats-and-teres-major";
            case "Lower traps":
                return "lower-traps";
            case "Lower chest":
                return "lower-chest";
            case "Middle traps":
                return "middle-traps";
            case "Quadriceps":
                return "quads";
            case "Rear delts":
                return "rear-delts";
            case "Rotator cuff":
                return "rotator-cuff";
            case "Serratus and Obliques":
                return "serratus-and-obliques";
            case "Side delts":
                return "side-delts";
            case "Spinal erectors":
                return "spinal-erectors";
            case "Triceps":
                return "triceps";
            case "Upper chest":
                return "upper-chest";
            case "Upper traps":
                return "upper-traps";
            default:
                return "undefined";
        }
    }

    // Returns the html element containing the text for the tooltip.
    function muscleFocus(muscle: string) {
        // Gets all muscle elements with the classname of the relevant muscle.
        let elements = Array.from(document.getElementsByClassName(tooltipToClass(muscle)));
        let focus = "";
        // Checks for every element if the muscle is a target, synergist, etc.
        // If this is the case, add text to tooltip.
        elements.forEach((el) => {
            if (el.classList.contains("target")) {
                focus = " - Target"
                return
            }
            else if (el.classList.contains("synergists")) {
                focus = " - Synergist"
                return
            }
            else if (el.classList.contains("dynamicStabilizers")) {
                focus = " - Dynamic stabilizer"
                return
            }
            else if (el.classList.contains("stabilizers")) {
                focus = " - Stabilizer"
                return
            }
            else if (el.classList.contains("antagonistStabilizer")) {
                focus = " - Antagonistic stabilizer"
                return
            }
        });
        const tooltipText = muscle + focus
        const tooltip = <h3> {tooltipText} </h3>

        return tooltip
    }


    return (
        <svg id="man_pic" xmlns="http://www.w3.org/2000/svg" width="700" height="800" viewBox="0 0 700 800">
            <image xlinkHref="male.jpg" width="700" height="800" />
            <Tooltip title={muscleFocus("Abdominals")}>
                <path className="muscle abdominals" data-html="true" data-container="#canvas-container" d="M 158.25,219.88 L 170.53,213.18 196.25,212.12 214.75,218.00 219.38,232.50 219.38,249.88 219.38,255.50 221.38,265.39 224.62,277.25 224.62,293.12 223.62,313.25 222.62,320.88 217.38,331.38 217.38,349.25 205.50,389.38 191.51,389.09 186.37,383.28 175.75,358.50 173.50,346.53 173.50,333.25 162.88,315.88 161.62,301.25 158.62,292.25 156.62,257.00 153.34,248.61 153.04,234.89 158.25,219.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Biceps")}>
                <path className="muscle biceps" data-html="true" data-container="#canvas-container" d="M 134.75,179.75 L 126.51,188.06 119.70,203.99 116.25,212.50 111.62,224.88 109.25,234.50 107.25,242.62 107.25,253.62 107.25,266.00 111.65,277.68 119.88,271.12 127.01,265.24 138.78,270.53 139.42,262.97 140.62,235.88 139.62,211.12 133.50,193.00 134.75,179.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Biceps")}>
                <path className="muscle biceps" data-html="true" data-container="#canvas-container" d="M 294.25,215.25 L 297.00,231.75 298.62,260.38 293.12,273.88 284.62,268.12 277.25,276.12 277.25,255.88 272.38,237.25 268.38,219.88 268.38,188.50 269.36,179.19 287.38,203.00 294.25,215.25 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Calves")}>
                <path className="muscle calves" data-html="true" data-container="#canvas-container" d="M 143.50,550.00 L 149.00,583.00 151.75,601.50 154.00,624.25 156.50,641.75 164.50,690.00 148.00,693.75 145.50,642.25 141.00,613.75 138.50,582.25 143.50,550.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Calves")}>
                <path className="muscle calves" data-html="true" data-container="#canvas-container" d="M 181.50,559.50 L 176.75,568.75 169.50,578.50 166.50,587.25 164.75,601.75 165.75,623.25 167.75,650.50 174.25,673.50 177.50,649.00 178.75,625.00 184.00,613.75 186.50,603.75 185.50,583.75 181.50,559.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Calves")}>
                <path className="muscle calves" data-html="true" data-container="#canvas-container" d="M 227.75,564.75 L 237.00,580.75 240.50,591.50 242.00,618.75 241.75,646.25 241.75,655.75 238.25,665.00 234.75,646.25 233.50,623.50 226.50,605.25 226.50,583.50 227.75,564.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Calves")}>
                <path className="muscle calves" data-html="true" data-container="#canvas-container" d="M 260.25,545.75 L 257.00,579.00 254.25,594.50 254.00,621.75 250.75,633.25 250.50,648.75 244.25,688.75 259.25,692.50 264.00,690.00 267.75,620.00 270.75,594.50 269.75,568.50 266.75,552.25 260.25,545.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Calves")}>
                <path className="muscle calves" data-html="true" data-container="#canvas-container" d="M 543.50,563.00 L 550.50,548.88 558.38,541.00 562.62,550.38 570.38,543.38 574.88,534.75 582.75,550.88 584.75,568.25 587.12,586.00 587.88,607.88 584.75,632.25 581.50,668.62 580.50,694.88 580.38,707.00 570.12,716.38 563.00,727.12 559.12,729.38 551.62,728.38 552.88,684.00 549.75,663.75 548.00,641.38 541.38,623.75 540.50,597.00 543.50,563.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Calves")}>
                <path className="muscle calves" data-html="true" data-container="#canvas-container" d="M 480.62,540.00 L 477.88,546.12 477.50,550.75 470.00,544.88 463.12,534.75 458.62,544.75 453.62,552.50 451.88,574.88 450.12,593.00 451.25,605.75 454.38,644.50 456.38,668.12 458.25,693.88 458.00,699.25 466.25,710.88 473.38,720.12 482.12,726.88 487.50,727.12 486.50,711.50 485.12,695.00 488.62,662.62 490.88,640.88 498.50,621.88 497.12,588.62 494.25,569.12 492.88,558.50 487.25,548.25 480.62,540.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Forearms")}>
                <path className="muscle forearms" data-html="true" data-container="#canvas-container" d="M 277.00,276.00 L 284.50,268.12 293.12,273.75 298.75,260.00 306.18,247.87 310.38,232.00 312.00,243.75 314.12,259.43 316.38,264.38 318.79,295.55 319.88,358.88 311.64,356.17 300.50,355.12 297.75,357.25 282.23,315.03 278.12,295.62 277.00,276.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Forearms")}>
                <path className="muscle forearms" data-html="true" data-container="#canvas-container" d="M 106.75,252.62 L 101.88,262.38 98.88,271.25 93.75,285.12 92.88,295.88 90.25,311.88 82.00,355.14 88.88,355.50 102.25,360.62 113.88,341.50 126.88,320.00 134.50,303.12 138.88,288.12 138.88,270.62 127.12,265.00 111.25,277.92 106.87,266.25 106.75,252.62 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Forearms")}>
                <path className="muscle forearms" data-html="true" data-container="#canvas-container" d="M 622.62,279.62 L 622.12,273.50 625.00,270.12 631.62,262.12 633.88,257.88 637.25,273.25 638.00,294.88 637.50,328.12 637.25,359.88 619.75,359.50 615.00,358.00 607.50,335.62 602.38,320.12 598.38,302.50 596.75,290.00 596.88,254.62 619.38,280.38 622.62,279.62 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Forearms")}>
                <path className="muscle forearms" data-html="true" data-container="#canvas-container" d="M 414.50,248.00 L 407.50,263.38 402.88,277.62 400.25,294.12 398.88,308.62 396.25,327.25 393.88,342.00 391.62,353.75 390.50,361.75 395.25,363.25 411.00,363.50 437.38,320.38 446.50,298.50 450.62,279.25 450.50,270.12 441.25,284.50 426.50,273.50 417.38,258.00 414.50,248.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Front delts")}>
                <path className="muscle front-delts" data-html="true" data-container="#canvas-container" d="M 155.62,148.00 L 143.50,145.12 134.50,148.75 127.38,153.38 122.88,158.62 118.38,166.50 116.88,175.38 116.88,188.62 119.50,204.12 123.00,196.32 126.50,188.12 134.75,179.62 135.75,169.88 137.75,159.38 155.62,148.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Front delts")}>
                <path className="muscle front-delts" data-html="true" data-container="#canvas-container" d="M 225.50,145.62 L 254.75,142.25 262.12,140.38 268.88,140.38 279.25,145.88 286.30,151.60 290.38,164.00 291.88,177.75 287.62,203.12 269.12,178.75 267.88,169.88 245.00,148.00 225.50,145.62 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Glutes")}>
                <path className="muscle glutes" data-html="true" data-container="#canvas-container" d="M 143.75,331.00 L 140.50,342.75 138.50,356.75 138.75,337.25 141.00,329.75 143.75,331.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Glutes")}>
                <path className="muscle glutes" data-html="true" data-container="#canvas-container" d="M 465.00,323.50 L 473.75,325.25 481.75,329.50 493.25,339.25 502.00,346.75 508.00,354.00 515.00,363.00 527.50,363.25 535.50,351.25 543.50,343.25 566.25,325.25 573.50,323.00 575.50,337.00 576.50,351.50 575.25,368.25 576.25,381.00 576.25,398.25 571.00,407.75 561.50,414.50 553.50,416.25 540.50,415.25 524.00,408.00 521.00,402.25 517.00,402.25 510.00,410.25 499.75,416.00 486.00,417.00 479.25,412.75 468.50,407.50 465.25,398.25 462.50,387.00 465.25,367.75 464.25,341.25 465.00,323.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Glutes")}>
                <path className="muscle glutes" data-html="true" data-container="#canvas-container" d="M 255.25,330.50 L 259.50,325.50 263.25,336.00 264.50,362.50 255.25,330.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hamstrings")}>
                <path className="muscle hamstrings" data-html="true" data-container="#canvas-container" d="M 580.00,434.75 L 575.25,424.25 570.00,417.50 553.50,417.00 548.25,435.00 546.25,455.25 541.25,472.50 539.25,486.25 541.50,527.50 542.75,534.75 542.25,552.75 543.25,561.25 550.50,548.75 558.00,541.00 562.50,549.50 570.00,543.75 574.25,534.50 582.50,550.00 584.50,512.25 581.50,482.25 582.50,461.50 580.00,434.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hamstrings")}>
                <path className="muscle hamstrings" data-html="true" data-container="#canvas-container" d="M 458.25,436.75 L 464.25,426.00 470.50,418.25 489.50,416.75 494.75,463.25 499.50,478.50 499.25,527.25 497.25,542.25 495.75,552.25 493.50,559.00 487.50,547.50 480.25,539.75 477.75,544.75 477.50,550.50 469.75,545.00 463.25,534.50 458.50,546.25 453.25,552.25 452.50,520.50 455.25,483.50 458.25,436.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hip adductors")}>
                <path className="muscle hip-adductors" data-html="true" data-container="#canvas-container" d="M 198.00,402.25 L 195.00,406.00 195.00,420.25 196.75,436.00 195.75,460.25 191.00,488.00 188.25,509.75 183.50,530.25 181.50,471.00 180.00,454.00 174.25,424.75 171.00,406.50 176.75,387.00 175.50,374.75 186.25,391.00 198.00,402.25 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hip adductors")}>
                <path className="muscle hip-adductors" data-html="true" data-container="#canvas-container" d="M 553.75,416.50 L 540.00,415.25 523.75,408.00 522.50,434.25 525.75,466.75 530.75,496.50 538.25,528.75 542.50,536.25 540.50,518.25 539.25,485.75 541.25,472.25 546.00,456.25 547.75,434.75 553.75,416.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hip adductors")}>
                <path className="muscle hip-adductors" data-html="true" data-container="#canvas-container" d="M 490.00,416.50 L 499.75,416.25 510.25,410.50 511.75,425.50 512.50,451.00 509.25,475.25 505.50,491.50 504.75,504.50 499.50,529.75 499.75,478.75 494.75,462.75 490.00,416.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hip adductors")}>
                <path className="muscle hip-adductors" data-html="true" data-container="#canvas-container" d="M 204.00,400.00 L 210.50,387.75 219.75,371.00 217.75,387.25 223.00,403.00 222.75,417.25 219.75,431.50 218.00,454.25 219.50,519.50 217.00,506.75 215.50,495.50 212.25,477.00 208.75,461.75 206.50,432.75 206.00,421.50 207.00,409.50 204.00,400.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hip flexors")}>
                <path className="muscle hip-flexors" data-html="true" data-container="#canvas-container" d="M 219.50,370.25 L 226.50,355.75 225.75,348.00 229.00,342.25 254.50,330.50 265.00,364.75 269.00,388.50 272.75,406.50 274.25,422.00 266.50,406.75 244.00,371.00 239.00,345.75 236.25,381.75 230.00,426.00 225.50,449.50 222.75,512.25 227.75,525.00 231.00,546.25 237.00,558.75 243.75,566.50 239.00,575.75 228.00,560.75 227.75,555.50 224.00,545.25 222.75,528.25 219.50,519.75 218.25,451.25 219.50,430.75 223.00,417.25 223.25,403.00 218.00,387.25 219.50,370.25 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Hip flexors")}>
                <path className="muscle hip-flexors" data-html="true" data-container="#canvas-container" d="M 129.00,408.50 L 133.50,399.25 143.50,382.50 149.50,369.50 154.75,351.00 155.75,345.00 156.25,376.00 162.75,420.75 172.75,457.00 173.50,470.00 177.25,497.75 178.25,515.75 174.75,524.50 171.00,548.25 160.50,563.25 165.50,576.00 178.50,561.75 182.75,537.50 183.25,529.25 181.75,475.25 180.25,455.50 171.00,407.00 176.50,387.75 175.50,374.50 166.50,355.75 166.00,346.25 161.75,341.50 143.75,330.50 140.50,342.00 138.75,355.50 134.00,378.25 129.00,408.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lats and Teres major")}>
                <path className="muscle lats-and-teres-major" data-html="true" data-container="#canvas-container" d="M 592.38,198.25 L 598.38,187.12 602.25,172.25 603.00,168.38 606.88,166.38 612.50,167.12 619.75,173.88 605.25,176.38 602.88,197.62 599.50,206.38 599.88,213.88 596.38,226.00 591.88,236.25 588.25,242.25 586.62,248.00 576.50,267.75 574.75,278.12 574.25,284.25 572.25,297.25 565.75,309.38 563.62,315.00 562.62,323.38 556.25,320.88 553.12,313.25 555.25,304.38 557.00,295.88 555.00,285.50 552.50,277.25 547.50,270.25 542.12,264.88 543.50,253.75 549.12,243.00 556.75,230.00 565.50,210.25 567.62,207.12 577.75,207.62"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lats and Teres major")}>
                <path className="muscle lats-and-teres-major" data-html="true" data-container="#canvas-container" d="M 477.12,194.88 L 482.38,201.00 496.50,207.75 507.50,207.50 509.62,214.88 512.00,223.00 516.50,235.88 519.50,243.75 521.12,253.88 521.12,263.38 513.62,270.25 503.25,281.00 494.88,288.62 489.75,299.25 491.62,312.00 492.62,318.25 488.75,321.12 479.88,323.75 481.00,320.62 479.75,314.75 471.88,298.62 467.00,285.00 461.50,266.88 460.38,257.88 456.88,246.50 462.25,231.25 464.00,206.62 462.88,197.75 459.62,188.25 458.50,174.12 449.38,171.88 443.75,173.38 451.62,166.50 460.00,165.62 464.12,169.25 471.75,181.38"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lats and Teres major")}>
                <path className="muscle lats-and-teres-major" data-html="true" data-container="#canvas-container" d="M 268.12,186.00 L 263.68,192.42 262.52,199.63 260.62,206.12 258.88,231.12 257.88,246.75 255.88,255.88 256.88,272.50 266.62,250.41 270.16,240.69 272.38,238.00 268.25,219.40 268.12,186.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lower traps")}>
                <path className="muscle lower-traps" data-html="true" data-container="#canvas-container" d="M 527.38,148.88 L 501.75,141.00 509.62,147.12 511.25,154.12 509.38,170.50 508.12,191.00 506.25,201.50 511.00,219.88 516.50,235.75 519.50,243.75 521.38,254.00 521.12,263.38 523.62,263.50 526.00,240.12 530.38,213.12 533.62,186.25 530.88,158.50 527.38,148.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lower traps")}>
                <path className="muscle lower-traps" data-html="true" data-container="#canvas-container" d="M 549.38,151.38 L 571.00,140.88 566.25,148.12 565.50,155.75 567.50,179.12 568.25,190.62 568.88,202.50 563.62,214.12 557.00,229.38 550.50,240.62 543.38,253.50 542.00,265.25 538.88,265.62 541.00,232.50 545.00,207.25 545.25,180.50 549.38,151.38 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lower chest")}>
                <path className="muscle lower-chest" data-html="true" data-container="#canvas-container" d="M 203.12,149.75 L 225.00,156.50 242.62,159.25 260.88,173.00 260.88,188.75 259.50,193.00 252.75,204.25 242.52,214.27 222.62,218.00 215.12,218.00 197.38,212.38 191.40,209.24 187.44,200.14 188.75,183.25 195.00,162.38 203.12,149.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lower chest")}>
                <path className="muscle lower-chest" data-html="true" data-container="#canvas-container" d="M 135.50,170.12 L 144.62,163.25 182.25,150.88 183.62,152.62 183.62,184.00 181.38,199.25 175.25,209.75 170.62,213.25 158.25,219.75 152.62,220.75 148.12,220.75 143.62,217.62 139.50,211.12 133.75,193.25 135.50,170.12 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Lower traps")}>
                <path className="muscle middle-traps" data-html="true" data-container="#canvas-container" d="M 542.88,115.88 L 549.62,151.38 585.12,133.75 580.38,132.88 571.38,128.75 563.62,124.00 552.38,119.38 542.88,115.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Middle traps")}>
                <path className="muscle middle-traps" data-html="true" data-container="#canvas-container" d="M 474.00,130.88 L 488.62,126.00 504.88,119.50 519.75,113.62 521.75,128.25 525.00,141.50 527.12,148.75 481.25,134.12 474.00,130.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Quadriceps")}>
                <path className="muscle quads" data-html="true" data-container="#canvas-container" d="M 239.00,348.00 L 243.75,370.75 252.50,385.25 266.75,407.50 274.50,423.25 278.50,445.00 277.25,477.50 273.25,496.50 268.25,506.75 266.00,525.25 262.50,531.75 257.00,518.75 255.25,503.75 243.50,502.75 243.25,515.25 241.00,526.50 235.75,529.75 228.00,525.25 223.25,512.75 223.25,493.75 225.00,454.75 230.25,425.75 236.25,383.00 239.00,348.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Quadriceps")}>
                <path className="muscle quads" data-html="true" data-container="#canvas-container" d="M 582.75,394.75 L 586.00,417.75 590.50,432.75 591.50,456.50 589.25,474.75 587.50,493.75 584.25,512.25 582.25,484.75 582.50,460.50 580.50,435.50 580.50,409.25 582.75,394.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Quadriceps")}>
                <path className="muscle quads" data-html="true" data-container="#canvas-container" d="M 455.50,397.00 L 451.50,418.50 445.75,439.25 445.75,460.00 448.25,479.00 450.75,498.00 452.25,520.75 453.75,502.50 456.00,468.25 457.50,447.00 459.00,427.25 460.00,413.25 455.50,397.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Quadriceps")}>
                <path className="muscle quads" data-html="true" data-container="#canvas-container" d="M 155.75,347.25 L 149.75,369.50 141.50,386.50 133.50,400.00 128.75,411.00 123.75,435.75 122.00,457.50 125.25,485.75 132.00,501.75 136.75,510.25 139.50,526.00 143.50,515.75 143.50,505.75 141.00,500.50 152.00,500.50 155.00,512.00 158.00,523.75 162.75,529.75 168.25,529.75 174.75,525.00 178.25,516.25 177.00,497.00 173.25,469.00 172.75,458.25 163.00,421.00 156.25,377.00 155.75,347.25 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Rear delts")}>
                <path className="muscle rear-delts" data-html="true" data-container="#canvas-container" d="M 423.25,186.38 L 428.25,168.12 434.25,155.88 445.38,146.38 463.75,136.88 472.75,149.00 461.25,152.50 452.38,156.88 445.38,163.75 442.75,173.88 437.00,180.25 427.88,192.38 426.25,197.00 423.25,186.38 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Rear delts")}>
                <path className="muscle rear-delts" data-html="true" data-container="#canvas-container" d="M 601.38,140.62 L 607.25,143.12 614.88,149.12 620.88,158.25 626.50,174.25 623.38,185.25 620.12,174.62 619.75,171.62 616.25,164.75 610.25,157.88 599.38,150.50 601.38,140.62 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Rotator cuff")}>
                <path className="muscle rotator-cuff" data-html="true" data-container="#canvas-container" d="M 567.25,207.00 L 571.50,198.50 571.62,183.88 576.00,167.88 576.62,152.62 579.25,150.00 581.75,153.25 599.88,154.25 610.25,157.75 616.38,165.12 619.75,171.50 620.00,174.25 612.50,166.88 606.88,166.25 603.12,168.38 600.88,176.62 596.88,190.00 592.38,198.62 585.88,203.62 577.75,207.75 573.00,207.50 567.25,207.00 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Rotator cuff")}>
                <path className="muscle rotator-cuff" data-html="true" data-container="#canvas-container" d="M 443.00,173.75 L 445.50,164.00 452.50,157.00 461.50,152.75 489.75,152.25 494.50,149.75 499.00,154.00 504.75,180.75 506.25,202.00 507.62,207.38 496.50,207.75 482.62,201.25 477.38,194.88 471.88,181.25 463.88,169.00 460.00,165.62 451.62,166.50 443.00,173.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Serratus and Obliques")}>
                <path className="muscle serratus-and-obliques" data-html="true" data-container="#canvas-container" d="M 562.75,323.62 L 563.25,316.38 565.25,310.38 572.12,298.00 574.38,284.50 576.00,294.38 577.50,300.62 577.12,309.62 575.25,319.12 562.75,323.62 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Serratus and Obliques")}>
                <path className="muscle serratus-and-obliques" data-html="true" data-container="#canvas-container" d="M 461.62,267.75 L 466.75,285.00 472.25,299.50 479.75,314.50 481.00,320.50 479.75,324.25 469.50,320.50 460.75,319.50 458.38,311.25 458.38,295.38 460.88,286.75 461.62,267.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Serratus and Obliques")}>
                <path className="muscle serratus-and-obliques" data-html="true" data-container="#canvas-container" d="M 139.75,211.25 L 143.57,217.66 147.88,220.62 153.25,220.74 149.49,225.62 151.88,227.50 150.88,235.50 150.88,239.88 147.25,241.75 149.94,244.44 151.00,250.62 152.00,258.62 148.62,259.88 152.00,261.88 152.88,265.62 154.12,280.38 151.25,281.38 154.45,287.53 154.45,291.50 157.00,297.38 152.00,302.38 159.27,309.37 160.50,321.50 165.62,332.88 168.25,338.50 161.62,338.75 150.95,332.57 142.62,326.34 144.88,321.38 142.38,312.25 141.81,296.14 145.37,282.99 145.00,269.18 143.38,259.88 140.62,234.00 139.75,211.25 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Serratus and Obliques")}>
                <path className="muscle serratus-and-obliques" data-html="true" data-container="#canvas-container" d="M 269.12,178.62 L 261.00,173.00 261.12,188.92 259.75,193.00 252.38,204.50 242.75,214.25 221.25,218.50 224.89,222.12 222.38,225.00 222.38,233.12 224.38,237.25 227.25,238.38 224.38,241.75 224.38,256.62 229.50,259.12 226.12,261.38 227.25,269.88 228.75,278.38 233.38,279.62 231.75,285.00 228.75,287.62 229.75,299.25 237.12,300.38 228.62,306.00 226.62,320.38 222.62,332.75 222.62,344.25 223.88,347.25 226.50,340.38 233.75,336.25 251.75,329.50 257.38,322.38 258.50,310.50 258.50,299.25 256.00,288.88 256.88,272.81 255.64,255.69 257.88,247.00 260.38,206.00 262.50,199.88 263.25,192.50 268.12,185.62 269.12,178.62 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Side delts")}>
                <path className="muscle side-delts" data-html="true" data-container="#canvas-container" d="M 287.50,202.88 L 294.38,215.12 301.00,193.25 304.25,173.88 303.29,164.25 300.75,156.75 296.25,149.75 288.38,143.50 281.26,140.00 270.50,136.50 265.88,136.50 261.88,140.00 268.62,140.12 279.25,145.88 286.38,151.38 290.62,164.12 292.00,177.75 287.50,202.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Side delts")}>
                <path className="muscle side-delts" data-html="true" data-container="#canvas-container" d="M 455.12,128.88 L 444.25,133.62 437.38,137.75 431.25,145.00 425.62,154.12 422.38,162.62 421.88,171.88 423.25,186.25 428.00,168.62 434.38,155.88 445.75,146.12 456.00,141.00 463.75,136.88 455.12,128.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Side delts")}>
                <path className="muscle side-delts" data-html="true" data-container="#canvas-container" d="M 603.25,133.88 L 613.25,138.50 620.00,145.38 624.62,153.00 626.12,160.75 626.38,174.62 621.00,158.12 615.25,149.50 607.00,143.00 601.38,140.62 603.25,133.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Side delts")}>
                <path className="muscle side-delts" data-html="true" data-container="#canvas-container" d="M 143.62,145.12 L 135.88,145.00 130.12,148.25 125.00,152.00 119.25,159.00 115.00,165.88 112.38,175.62 112.38,185.88 113.38,194.25 115.38,203.25 116.64,211.44 119.50,204.91 116.88,189.36 116.88,175.75 118.25,166.62 122.32,159.62 127.12,153.62 134.50,148.75 143.62,145.12 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Spinal erectors")}>
                <path className="muscle spinal-erectors" data-html="true" data-container="#canvas-container" d="M 491.25,331.88 L 492.50,318.25 489.62,299.12 494.75,288.75 504.25,280.12 513.88,270.12 521.00,263.50 523.62,263.50 526.25,239.25 529.50,219.00 533.88,186.50 531.38,158.88 527.38,148.62 523.75,134.75 521.62,128.00 520.12,114.00 520.88,106.38 525.12,99.88 531.75,96.25 539.12,102.88 542.88,115.25 549.38,151.12 545.25,180.50 545.00,207.00 540.75,233.38 538.62,265.88 542.12,265.25 548.50,270.88 552.50,277.50 557.00,296.50 553.00,313.38 556.38,321.38 562.75,323.38 542.75,340.50 532.88,346.50 528.50,355.25 526.12,360.62 517.25,360.50 510.62,350.38 508.62,343.38 491.25,331.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Triceps")}>
                <path className="muscle triceps" data-html="true" data-container="#canvas-container" d="M 138.88,270.12 L 143.25,260.12 140.88,234.12"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Triceps")}>
                <path className="muscle triceps" data-html="true" data-container="#canvas-container" d="M 414.50,247.75 L 417.88,224.38 421.75,210.25 425.88,202.00 426.12,196.88 427.88,192.25 437.00,180.12 442.75,173.75 449.38,172.25 458.38,174.12 459.75,188.50 463.00,197.88 463.88,206.12 462.00,222.38 462.00,230.88 458.00,243.12 455.38,249.88 452.50,259.00 450.12,264.00 450.38,270.12 441.25,284.12 426.50,273.62 417.62,258.62 414.50,247.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Triceps")}>
                <path className="muscle triceps" data-html="true" data-container="#canvas-container" d="M 592.00,236.50 L 596.50,226.00 599.75,214.00 599.50,206.88 602.88,198.00 605.38,176.38 615.62,174.88 619.75,174.12 623.25,185.50 623.38,189.62 626.38,197.62 631.25,210.25 631.50,217.88 632.38,235.88 633.50,241.50 633.88,257.75 631.50,262.00 622.12,273.38 622.50,279.50 619.62,280.25 596.00,253.38 593.25,244.25 592.00,236.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Triceps")}>
                <path className="muscle triceps" data-html="true" data-container="#canvas-container" d="M 294.12,214.75 L 297.12,231.50 298.75,260.25 305.88,247.42 310.13,233.16 310.50,219.50 306.75,207.50 301.38,193.54 294.12,214.75 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Upper chest")}>
                <path className="muscle upper-chest" data-html="true" data-container="#canvas-container" d="M 203.12,149.88 L 225.25,145.62 245.38,148.25 267.75,169.88 269.00,178.75 242.88,159.25 225.50,156.62 203.12,149.88 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Upper chest")}>
                <path className="muscle upper-chest" data-html="true" data-container="#canvas-container" d="M 155.62,148.50 L 175.25,148.00 182.38,150.88 145.12,163.00 135.50,169.88 137.62,159.62 155.62,148.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Upper traps")}>
                <path className="muscle upper-traps" data-html="true" data-container="#canvas-container" d="M 520.75,74.50 L 526.75,74.50 527.88,80.50 527.25,91.50 525.00,100.00 520.75,106.25 519.88,113.62 504.50,119.50 488.75,126.00 473.88,131.00 468.62,126.00 480.12,122.00 493.00,116.25 502.12,109.62 513.00,101.75 519.00,91.62 520.38,81.38 520.75,74.50 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Upper traps")}>
                <path className="muscle upper-traps" data-html="true" data-container="#canvas-container" d="M 536.12,90.38 L 537.38,83.50 539.62,77.88 544.25,78.00 544.38,86.00 543.88,92.12 547.25,100.00 551.38,108.00 559.62,114.62 571.25,120.88 581.00,126.12 589.50,128.75 585.38,133.75 580.25,132.75 571.50,128.75 563.38,123.88 552.50,119.38 543.12,116.00 540.62,107.25 536.12,95.00"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Upper traps")}>
                <path className="muscle upper-traps" data-html="true" data-container="#canvas-container" d="M 226.75,110.12 L 221.25,121.62 232.50,141.88 244.12,141.88 257.88,134.38 247.59,130.50 240.00,126.25 234.62,122.62 229.88,117.00 226.75,110.12 Z"></path>
            </Tooltip>
            <Tooltip title={muscleFocus("Upper traps")}>
                <path className="muscle upper-traps" data-html="true" data-container="#canvas-container" d="M 150.31,140.70 L 153.88,144.34 158.00,145.38 175.12,145.25 177.88,142.50 178.82,128.75 164.62,136.88 158.76,139.77 150.31,140.70 Z"></path>
            </Tooltip>
        </svg>
    );
}