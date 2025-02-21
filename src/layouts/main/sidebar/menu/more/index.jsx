import { Popover ,Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react"
export default function More(){
    return(
        <Popover className="relative">
            <Popover.Button className="py-[3px] block group outline-non">
            <>
                        
                        <div 
                        className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg[#eff3f41a]"
                            >
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                            <path fill="#fff" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"/></svg>
                            </div>
                                <div className="pr-4 text-xl">
                                    daha fazla
                                </div>
                        </div>
                    </>
                
            </Popover.Button>
                                                                                                                                                        
            <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
            <div className="py-[3px] block group outline-none">
            
            <button 
                        className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]"
                            >
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24" >
                          <path  fill="#fff" 
                          d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"/>
                           </svg>
                              </div>
                                <div className="pr-4 text-xl font-bold">
                                   Listeler
                                </div>
                        </button>
                        

                        <button 
                        className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]"
                            >
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24">
                          <path fill="#fff"
                          d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"/>
                           </svg>
                              </div>
                                <div className="pr-4 text-xl font-bold">
                                    Topluluklar
                                </div>
                        </button>
                        <button 
                        className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]"
                            >
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24">
                            <path  fill="#fff"
                            d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"/>
                           </svg>
                              </div>
                                <div className="pr-4 text-xl font-bold">
                                    Para kazanma
                                </div>
                        </button> <button 
                        className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                            
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24" >
                           <path  fill="#fff"
                            d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"/>
                           </svg>
                              </div>
                                <div className="pr-4 text-xl font-bold">
                                    Reklamlar
                                </div>
                                
                        </button>
                        <button 
                        className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                            
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24">
                           <path 
                            fill="#fff"d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zM5 11.5c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7s-7 3.134-7 7v2.75zm12-2.75v2.75c0 2.761-2.24 5-5 5s-5-2.239-5-5V8.75c0-2.761 2.24-5 5-5s5 2.239 5 5zM11.25 8v4.25c0 .414.34.75.75.75s.75-.336.75-.75V8c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm-3 1v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm7.5 0c0-.414-.34-.75-.75-.75s-.75.336-.75.75v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9z"/>
                           </svg>
                              </div>
                                <div className="pr-4 text-xl font-bold">
                                   Alanınızı yaratın
                                </div>
                                
                        </button>
                         <button 
                        className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                            
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24">
                          <path fill="#fff"
                          d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"/>
                           </svg>
                              </div>
                                <div className="pr-4 text-xl font-bold">
                                    Verified Orgs
                                </div>
                                
                        </button>
                        <button 
                        className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                            
                           <div className="w-[26.25px] h-[26.25px] relative">
                           <svg viewBox="0 0 24 24"  > 
                            <path  fill="#fff"
                            d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"/>
                           </svg>
                              </div>
                                <div className="pr-4 text-xl font-bold">
                                    Ayarlar ve Gizlilik
                                </div>
                                
                        </button>
                       <div className="h-px bg-[#2f3336] my-0.5 w-[89%] mx-auto"/>
                    <Disclosure>
                        <DisclosureButton className="h-[52px] transition-colors flex items-center justify-between w-full px-4 font-bold hover:bg-[#eff3f41a]">
                            İçerik Üreticisi Studyosu
                            </DisclosureButton>
                        <DisclosurePanel className="text-gray-500">
                       Yes! You can purchase a license that you can share with your entire team.
                        </DisclosurePanel>
                   </Disclosure>
            </div>
            </Popover.Panel>
        </Popover>
    )
}