import React, { useState } from "react";
import {
  FilterSharpIcon,
  MistoryIcon,
  ExplorerIcon,
  ProgressUploadSharpIcon,
  PersonSettingSharpIcon,
  UserCircleSharpIcon,
} from "../../Shared/SvgIcons";
import { useAuth } from "../../../contexts/AuthContext";
import {
  NavigationBarContainer,
  NavigationBarContent,
  MenuItemWrapper,
  FilterContainer,
} from "./styles";
import { SideBarFilterSection } from "../../Shared/SideBarFilterSection";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function HomeNavigationBar(props) {
  const { auth } = useAuth();
  const router = useRouter();
  const [isFilter, setIsFilter] = useState(false);
  const { t } = useTranslation();
  const openExplore = () => {
    setIsFilter(false);
    router.push("/");
  };
  return (
    <div>
      <NavigationBarContainer>
        <NavigationBarContent>
          <MenuItemWrapper
            active={!isFilter && router.pathname.includes("/explorer")}
            onClick={openExplore}
          >
            <ExplorerIcon />
            <span>{t("Explorer")}</span>
          </MenuItemWrapper>
          <MenuItemWrapper
            active={router.pathname === "/mystery"}
            onClick={() => router.push("/mystery")}
          >
            <MistoryIcon />
            <span>{t("MysteryBox")}</span>
          </MenuItemWrapper>
          <MenuItemWrapper active={isFilter} onClick={() => setIsFilter(true)}>
            <FilterSharpIcon />
            <span>{t("Filters")}</span>
          </MenuItemWrapper>
          {auth.isLoggedIn && (
            <>
              <MenuItemWrapper
                active={router.pathname === "/upload"}
                onClick={() => router.push("/upload")}
              >
                <ProgressUploadSharpIcon />
                <span>{t("Upload")}</span>
              </MenuItemWrapper>
              <MenuItemWrapper
                active={router.pathname === "/profile/me"}
                onClick={() => router.push("/profile/me")}
              >
                <UserCircleSharpIcon />
                <span>{t("Profile")}</span>
              </MenuItemWrapper>
              <MenuItemWrapper
                active={router.pathname === "/settings"}
                onClick={() => router.push("/settings")}
              >
                <PersonSettingSharpIcon />
                <span>{t("Settings")}</span>
              </MenuItemWrapper>
            </>
          )}
        </NavigationBarContent>
      </NavigationBarContainer>
      {isFilter && (
        <FilterContainer>
          <SideBarFilterSection
            {...props}
            closeSideMenu={() => setIsFilter(false)}
          />
        </FilterContainer>
      )}
    </div>
  );
}
