'use client';

import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function board() {

    const rouer = useRouter();

    let handleClick = async (e) => {
        rouer.push(e)
    }

    return (
        <div class="row h-100">
            <div class={`${styles.boardPageList} shadow-sm col-2`}>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                <div class={`${styles.boardPageListItem} m-2 p-2`}>
                    Page
                </div>
                


            </div>
            <div class="col-10 offset-2">
                <div class={`${styles.boardDisplay} px-5 py-3`}>
                    <div class={`${styles.boardDisplayTitle}`}>
                        Title
                    </div>
                    <div class={`${styles.boardDisplayAuthor}`}>
                        <span>shashnk kawle</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>3 Mar, 1997</span>
                    </div>
                    <div class="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum justo eget turpis tristique, ac vehicula est accumsan. Mauris ultricies accumsan eros id dapibus. Nam nunc sapien, ultricies ut ornare a, dignissim a purus. Suspendisse dictum venenatis ullamcorper. In pulvinar sagittis odio id fringilla. Nunc euismod leo non volutpat viverra. Proin pulvinar euismod sapien. Donec tempus quam vel feugiat lacinia. Pellentesque aliquam arcu ut tempus pellentesque.

                        Mauris aliquam, mi a ultricies fermentum, nunc magna consectetur leo, non vehicula purus ante quis est. Duis bibendum enim leo, in maximus nibh egestas quis. Fusce fermentum, justo ac ultricies bibendum, purus massa egestas leo, eget ultricies massa risus nec massa. Mauris neque turpis, tempus ac volutpat vel, hendrerit varius sapien. Nullam lorem quam, posuere eget condimentum sit amet, viverra quis urna. Quisque egestas malesuada cursus. Donec aliquet eleifend augue, a sagittis dui auctor at. Ut tincidunt pharetra arcu eu consequat.

                        Quisque et neque a est sollicitudin luctus eu eu enim. Phasellus ultricies, lorem nec sodales condimentum, libero diam pellentesque orci, ac interdum urna leo sed sapien. Proin auctor, tortor ac accumsan placerat, quam magna commodo tortor, vitae bibendum eros elit non erat. Sed sed enim faucibus urna rhoncus eleifend in at dolor. Phasellus dui urna, dapibus ac tempor eu, vulputate ut nisl. Donec eget fermentum lorem, sit amet molestie mauris. Suspendisse porttitor libero at dignissim venenatis. Nunc nunc diam, ullamcorper nec lacus in, blandit scelerisque nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel lacus diam. Nullam fermentum ligula vel purus porttitor, ut posuere tellus pretium. Maecenas molestie, odio et fermentum iaculis, tellus mauris tincidunt mauris, id lacinia lorem quam eget metus. Morbi accumsan cursus venenatis. Nulla quis gravida ipsum, at facilisis tortor.

                        Cras ut dictum arcu. Aenean tortor nisl, bibendum sit amet felis et, euismod venenatis velit. Maecenas a auctor elit. Integer mattis diam velit, ut facilisis dui scelerisque eu. Aliquam rutrum, ante eget efficitur posuere, lacus lorem interdum nunc, vel ullamcorper ante diam quis leo. Duis vel erat ultricies, varius mauris eu, tincidunt purus. Proin euismod magna eget lacus dictum, vitae ornare lectus scelerisque. Nunc quis commodo nisl. Vestibulum sed mi orci. Duis feugiat vel sem non malesuada. In vulputate, est sollicitudin laoreet ultrices, nisi libero tincidunt massa, at tempor massa ligula vel lectus. Donec sodales nisl sit amet purus pellentesque, eget commodo mi fermentum. Vivamus ante nisl, feugiat a justo et, mattis euismod felis. Fusce fermentum sapien quis odio laoreet, nec rhoncus tellus imperdiet. Morbi a est aliquam, pharetra libero ac, tristique elit. Pellentesque facilisis dui id ex ultricies pulvinar.

                        Nullam nec ultricies justo. Nunc eu imperdiet diam, et convallis mi. Duis venenatis faucibus magna, eget molestie augue congue ut. Vivamus ornare ornare nisl eu iaculis. Proin laoreet quis justo sed fermentum. Nulla blandit id leo vitae hendrerit. Nam at semper ligula. Sed facilisis interdum sem in consequat. Sed molestie diam at est iaculis, vel pellentesque nibh vehicula. Quisque dapibus odio a nisi semper, vel aliquet arcu vehicula. Fusce luctus dui at nulla vehicula interdum.
                    </div>
                </div>
            </div>
        </div >
    )
}