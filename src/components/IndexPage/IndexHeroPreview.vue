<template>
    <div class="page-wrapper large hero-preview">
        <div class="hero-panel" aria-hidden="true">
            <div class="hero-panel-sidebar">
                <span v-for="item in 5" :key="`sidebar-${item}`"></span>
            </div>
            <div class="hero-panel-content">
                <div class="hero-panel-toolbar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="hero-panel-grid">
                    <span v-for="item in 12" :key="`grid-${item}`"></span>
                </div>
            </div>
        </div>

        <div class="icons">
            <link-icon size="20" class="icon"></link-icon>
            <image-icon size="38" class="icon"></image-icon>
            <hard-drive-icon size="34" class="icon"></hard-drive-icon>
            <folder-plus-icon size="40" class="icon"></folder-plus-icon>
            <settings-icon size="18" class="icon"></settings-icon>
            <search-icon size="24" class="icon"></search-icon>
            <star-icon size="18" class="icon"></star-icon>
            <trash2-icon size="32" class="icon"></trash2-icon>
            <search-icon size="18" class="icon"></search-icon>
            <eye-icon size="30" class="icon"></eye-icon>
            <star-icon size="30" class="icon"></star-icon>
            <folder-plus-icon size="16" class="icon"></folder-plus-icon>
            <grid-icon size="20" class="icon"></grid-icon>
        </div>
    </div>
</template>

<script>
import {
    FolderPlusIcon,
    HardDriveIcon,
    SettingsIcon,
    Trash2Icon,
    SearchIcon,
    ImageIcon,
    GridIcon,
    LinkIcon,
    StarIcon,
    EyeIcon,
} from 'vue-feather-icons'

export default {
    name: 'IndexHeroPreview',
    components: {
        FolderPlusIcon,
        HardDriveIcon,
        SettingsIcon,
        Trash2Icon,
        SearchIcon,
        ImageIcon,
        GridIcon,
        LinkIcon,
        StarIcon,
        EyeIcon,
    },
}
</script>

<style lang="scss" scoped>
@import '../../../sass/zorin-ui/landing-page';
@import '../../../sass/zorin-ui/variables';
@import '../../../sass/zorin-ui/mixins';

.icons {
    .icon {
        z-index: 0;
        position: absolute;

        &:nth-child(1) {
            top: -14%;
            right: 2%;
        }

        &:nth-child(2) {
            top: -5%;
            right: 14%;
            transform: rotate(19deg);
        }

        &:nth-child(3) {
            top: -6.5%;
            right: 28.5%;
            transform: rotate(-12deg);

            line,
            path {
                stroke: $theme;
            }
        }

        &:nth-child(4) {
            top: -9.5%;
            right: 41.5%;
            transform: rotate(13deg);

            path,
            line {
                stroke: $yellow;
            }
        }

        &:nth-child(5) {
            top: -16%;
            right: 26%;

            circle,
            path {
                stroke: $red;
            }
        }

        &:nth-child(6) {
            top: -13%;
            right: 49%;
        }

        &:nth-child(7) {
            top: 2.5%;
            right: 46%;

            polygon {
                stroke: $purple;
            }
        }

        &:nth-child(8) {
            top: 13%;
            right: 2.5%;
            transform: rotate(22deg);

            polyline,
            path,
            line {
                stroke: $red;
            }
        }

        &:nth-child(9) {
            top: 14%;
            right: 11%;

            circle,
            line {
                stroke: $purple;
            }
        }

        &:nth-child(10) {
            top: 29%;
            right: 7%;
            transform: rotate(19deg);
        }

        &:nth-child(11) {
            top: 38%;
            right: 3%;

            polygon {
                stroke: $yellow;
            }
        }

        &:nth-child(12) {
            top: 50%;
            right: 11.5%;
            transform: rotate(-22deg);
        }

        &:nth-child(13) {
            top: 34%;
            right: 16%;
            transform: rotate(13deg);

            rect {
                stroke: $theme;
            }
        }
    }
}

.hero-preview {
    position: relative;
    z-index: 1;
    padding-top: 75px;
    padding-bottom: 130px;
}

.hero-panel {
    display: grid;
    grid-template-columns: 220px 1fr;
    width: 80%;
    min-height: 440px;
    overflow: hidden;
    border: 1px solid rgba(#1b2539, 0.06);
    border-radius: 8px;
    background: white;
    box-shadow: 0 7px 255px rgba(#19363c, 0.1);
}

.hero-panel-sidebar {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 32px;
    border-right: 1px solid rgba(#1b2539, 0.06);
    background: #fbfbfd;

    span {
        display: block;
        height: 16px;
        border-radius: 8px;
        background: rgba(#1b2539, 0.08);

        &:nth-child(1) {
            width: 76%;
            background: rgba($theme, 0.18);
        }

        &:nth-child(2) {
            width: 58%;
        }

        &:nth-child(3) {
            width: 68%;
        }

        &:nth-child(4) {
            width: 52%;
        }

        &:nth-child(5) {
            width: 62%;
        }
    }
}

.hero-panel-content {
    padding: 34px;
}

.hero-panel-toolbar {
    display: flex;
    gap: 14px;
    margin-bottom: 34px;

    span {
        display: block;
        height: 38px;
        border-radius: 8px;
        background: #f4f5f6;

        &:nth-child(1) {
            width: 44%;
        }

        &:nth-child(2),
        &:nth-child(3) {
            width: 46px;
        }
    }
}

.hero-panel-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;

    span {
        display: block;
        aspect-ratio: 1;
        border-radius: 8px;
        background: #f4f5f6;

        &:nth-child(4n + 1) {
            background: rgba($theme, 0.12);
        }

        &:nth-child(4n + 2) {
            background: rgba($yellow, 0.12);
        }

        &:nth-child(4n + 3) {
            background: rgba($purple, 0.12);
        }
    }
}

@media only screen and (max-width: 890px) {
    .icons {
        display: none;
    }

    .hero-preview {
        padding-top: 40px;
        padding-bottom: 90px;
    }

    .hero-panel {
        grid-template-columns: 1fr;
        width: 100%;
        min-height: 340px;
    }

    .hero-panel-sidebar {
        display: none;
    }

    .hero-panel-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.dark {
    .hero-panel {
        border-color: rgba(white, 0.04);
        background: $dark_mode_foreground;
        box-shadow: 0 7px 185px rgba(0, 0, 0, 0.8);
    }

    .hero-panel-sidebar {
        border-color: rgba(white, 0.04);
        background: $dark_mode_background;

        span {
            background: rgba(white, 0.08);

            &:nth-child(1) {
                background: rgba($theme, 0.22);
            }
        }
    }

    .hero-panel-toolbar,
    .hero-panel-grid {
        span {
            background: rgba(white, 0.07);
        }
    }
}
</style>
